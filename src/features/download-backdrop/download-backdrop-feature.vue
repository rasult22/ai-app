<script setup lang="ts">
import {ref} from 'vue'

import BaseImage from 'src/ui/images/base-image.vue'
import BaseBackdrop from 'src/ui/backdrop/base-backdrop.vue'
import BaseButton from 'src/ui/buttons/base-button.vue'
import BaseSwitcher, {SwitchItem} from 'src/ui/switcher/base-switcher.vue'

const switchItems = ref<SwitchItem[]>([
  {
    id: 'border',
    text: 'Рамка',
    active: false,
  },
  {
    id: 'original',
    text: 'Оригинал',
    active: true
  }]
)
const isOpen = ref(true)
</script>

<template>
  <BaseBackdrop v-model:is-open="isOpen">
    <template #title>
      <div class="download-backdrop__title-small">
        Скачать
      </div>
    </template>
    <div class="download-backdrop__content">
      <BaseImage class="download-backdrop__img" src="https://i.redd.it/2unqm5kmwwn91.jpg" />
      <div class="download-backdrop__switcher-wrapper">
        <BaseSwitcher class="download-backdrop__switcher" :items="switchItems"/>
      </div>
      <BaseButton yellow>
        Скачать
      </BaseButton>
    </div>
  </BaseBackdrop>
</template>

<style lang="scss" scoped>
.download-backdrop{
  &__title-small {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    color: rgba(0, 0, 0, 0.3);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 16px;
  }
  &__content {
    padding: 16px;
  }
  &__img {
    padding: 0 52px;
  }
  &__switcher {
    margin-top: 16px;
    margin-bottom: 32px;
    &-wrapper {
      padding: 0 52px;
    }
  }
}
</style>
