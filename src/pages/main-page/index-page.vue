<script lang="ts" setup>
import RequestTextInputFeature from 'src/features/request-text-input/request-text-input-feature.vue'
import ChooseStyleBlockFeature from 'src/features/choose-style-block/choose-style-block-feature.vue'
import BaseButton from 'src/ui/buttons/base-button.vue'
</script>

<template>
  <div class="main-page full-width q-px-md">
    <RequestTextInputFeature />
    <ChooseStyleBlockFeature />
    <div class="main-page__sticky-btn">
      <BaseButton yellow>Создать</BaseButton>
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
