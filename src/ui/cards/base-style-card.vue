<script lang="ts" setup>

interface Props {
  active?: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="base-style-card">
    <div class="base-style-card__img" :class="{'base-style-card__img--active': active}">
      <slot name="image">
        <img :src="require('src/assets/style.png')" alt="">
      </slot>
    </div>
    <div class="base-style-card__title">
      Title
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-style-card {
  &__img {
    position: relative;
    min-width: 100px;
    min-height: 100px;
    background-color: #D9D9D9;
    border-radius: 12px;
    &--active {
      border: 2px solid #FFD740;
      &::before {
        z-index: 100;
        content: '';
        position: absolute;
        background-color: rgba(255, 215, 64, 0.3);
        width: 100%;
        height: 100%;
      }
    }
    img {
      width: 100%;
    }
  }
  &__title {
    margin-top: 10px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
  }
}
</style>
