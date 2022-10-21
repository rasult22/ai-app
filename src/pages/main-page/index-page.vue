<script lang="ts" setup>
import RequestTextInputFeature from 'src/features/request-text-input/request-text-input-feature.vue'
import ChooseStyleBlockFeature from 'src/features/choose-style-block/choose-style-block-feature.vue'
import BaseButton from 'src/ui/buttons/base-button.vue'
import {useAppStore} from 'src/stores/app'
import { onMounted, computed } from 'vue';
import { useProcess } from 'src/composables/useProcess';
const appStore = useAppStore()

const {selectedStyle, requestText} = useProcess()


const isReady = computed(() => {
  return selectedStyle.value && requestText.value
})
onMounted(async () => {
 await appStore.fetchStyles()
})
const onClick = () => {
  console.log('hey');
}
</script>

<template>
  <div class="main-page full-width q-px-md">
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
