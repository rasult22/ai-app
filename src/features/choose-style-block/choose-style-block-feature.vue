<script setup lang="ts">
import StyleCardList from 'src/ui/cards/style-card-list.vue'
</script>

<template>
  <div class="choose-style-block">
    <div class="choose-style-block__head">
      <div class="choose-style-block__title">
        Выберите стиль
      </div>
      <div class="choose-style-block__more-btn">
        Посмотреть все
      </div>
    </div>
    <StyleCardList class="choose-style-block__cards" />
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
