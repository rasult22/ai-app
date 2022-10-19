<script setup lang="ts">
import {ref} from 'vue'
import StyleCardList from 'src/ui/cards/style-card-list.vue'
import BaseBackdrop from 'src/ui/backdrop/base-backdrop.vue'

const isBackdropOpen = ref(false)

</script>

<template>
  <div class="choose-style-block">
    <div class="choose-style-block__head">
      <div class="choose-style-block__title">
        Выберите стиль
      </div>
      <div @click="isBackdropOpen = true" class="choose-style-block__more-btn">
        Посмотреть все
      </div>
    </div>
    <StyleCardList isHorizontal class="choose-style-block__cards" />
    <BaseBackdrop v-model:is-open="isBackdropOpen">
      <StyleCardList class="choose-style-block__cards" />
    </BaseBackdrop>
  </div>
</template>

<style lang="scss" scoped>
  .choose-style-block {
    &__cards {
       margin-top: 8px;
    }
    &__head {
      margin-top: 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__title {
      font-family: Roboto;
      font-size: 24px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0px;
      text-align: left;
    }
    &__more-btn {
      font-family: Roboto;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0px;
      text-align: right;
      color: #1976D2;
    }
  }
</style>
