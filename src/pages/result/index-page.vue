<script lang="ts" setup>
import { ref } from 'vue';
import { useAppStore } from 'src/stores/app';
import { useProcess } from 'src/composables/useProcess';
import BaseImage from 'src/ui/images/base-image.vue'
import BaseButton from 'src/ui/buttons/base-button.vue'
import BaseLoader from 'src/ui/loaders/base-loader.vue';
import RenameBackdropFeature from 'src/features/rename-backdrop/rename-backdrop-feature.vue'
import DownloadBackdropFeature from 'src/features/download-backdrop/download-backdrop-feature.vue';
const {image, selectedStyle, requestText} = useProcess()

const isLoading = ref(false)
const showDownloadBackdrop = ref(false)
const appStore = useAppStore()

const onRefresh = async () => {
  isLoading.value = true
  try {
    await appStore.generateImage(selectedStyle.value, requestText.value)
    image.value = appStore.image
    isLoading.value = false
  } catch (e) {
    alert('Произошла непредвиденная ошибка! Попробуйте снова')
    window.location.href = '/'
    isLoading.value = false
  }
}
const onDownload =() => {
  showDownloadBackdrop.value = true
}
</script>


<template>
  <BaseLoader v-if="isLoading" />
  <div v-else class="result-page full-width q-px-md">
    <BaseImage @download="onDownload" @refresh="onRefresh" :src="image || 'https://i.redd.it/2unqm5kmwwn91.jpg'" refresh download></BaseImage>
    <RenameBackdropFeature></RenameBackdropFeature>
    <DownloadBackdropFeature v-if="showDownloadBackdrop"></DownloadBackdropFeature>
    <div class="result-page__buttons">
      <BaseButton class="result-page__buttons-item" black>
        Опубликовать
      </BaseButton>
      <BaseButton yellow>
        Поделиться
      </BaseButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.result-page {
  padding-top: 16px;
  &__buttons {
    position: absolute;
    bottom: 15px;
    padding: 0 16px;
    left: 0;
    width: 100%;
    display: flex;
    &-item {
      margin-right: 15px;
    }
  }
}

</style>
