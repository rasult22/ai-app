<script lang="ts" setup>
import RequestTextInputFeature from 'src/features/request-text-input/request-text-input-feature.vue'
import ChooseStyleBlockFeature from 'src/features/choose-style-block/choose-style-block-feature.vue'
import BaseButton from 'src/ui/buttons/base-button.vue'
import BaseLoader from 'src/ui/loaders/base-loader.vue'

import {useAppStore} from 'src/stores/app'
import { onMounted, computed, ref } from 'vue';
import { useProcess } from 'src/composables/useProcess';
import { useRouter } from 'vue-router';
const appStore = useAppStore()
const router = useRouter()
const {selectedStyle, requestText, image} = useProcess()

const isLoading = ref(false)
const isReady = computed(() => {
  return selectedStyle.value && requestText.value
})
onMounted(async () => {
 await appStore.fetchStyles()
})
const onClick = async () => {
  isLoading.value = true
  try {
    await appStore.generateImage(selectedStyle.value, requestText.value)
    image.value = appStore.image
    router.push('/result')
  } catch(e) {
    alert('Произошла непредвиденная ошибка! Попробуйте снова')
    window.location.reload()
  }
  isLoading.value = false
}
</script>

<template>
  <BaseLoader v-if="isLoading" />
  <div v-else class="main-page full-width q-px-md">
    <RequestTextInputFeature />
    <ChooseStyleBlockFeature />
    <div class="main-page__sticky-btn">
      <BaseButton @click="onClick" yellow :disabled="!isReady">Создать</BaseButton>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.main-page {
  &__sticky-btn {
    padding: 16px 0;
    background-color: transparent;
    position: sticky;
    bottom: 0;
  }
}
</style>
