<script lang="ts" setup>
import BaseStyleCard from './base-style-card.vue'

defineProps<{isHorizontal?: boolean}>()
</script>

<template>
  <div class="style-card-list">
    <template v-if="isHorizontal">
      <div class="style-card-list__wrapper">
        <BaseStyleCard class="style-card-list__item" v-for="i in 12" :key="i"></BaseStyleCard>
      </div>
      <div class="style-card-list__wrapper">
        <BaseStyleCard class="style-card-list__item" v-for="i in 12" :key="i"></BaseStyleCard>
      </div>
    </template>
    <template v-else>
      <div class="style-card-list__wrapper--vertical">
        <BaseStyleCard class="style-card-list__item style-card-list__item--vertical" v-for="i in 12" :key="i"></BaseStyleCard>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>

.style-card-list {
  overflow: auto;
  padding: 10px 0 30px;
  &__wrapper {
    display: flex;
    &:first-child {
      margin-top: 0;
    }
    margin-top: 20px;

    &--vertical {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  &__item {
    margin-right: 16px;
    &--vertical {
      &:nth-child(3n) {
        margin-right: 0;
      }
      margin-top: 20px;
    }
  }
}
</style>
