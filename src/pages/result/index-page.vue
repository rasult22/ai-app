<script lang="ts" setup>
import { useAppStore } from 'src/stores/app';
import { useProcess } from 'src/composables/useProcess';
import BaseImage from 'src/ui/images/base-image.vue'
import BaseButton from 'src/ui/buttons/base-button.vue'
import RenameBackdropFeature from 'src/features/rename-backdrop/rename-backdrop-feature.vue'
const {image, selectedStyle, requestText} = useProcess()
const appStore = useAppStore()

const onRefresh = async () => {
  await appStore.generateImage(selectedStyle.value, requestText.value)
}
const onDownload =() => {
  //
}
</script>


<template>
  <div class="result-page full-width q-px-md">
    <BaseImage @download="onDownload" @refresh="onRefresh" :src="image || 'https://i.redd.it/2unqm5kmwwn91.jpg'" refresh download></BaseImage>
    <RenameBackdropFeature></RenameBackdropFeature>
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
