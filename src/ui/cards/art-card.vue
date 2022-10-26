<script setup lang="ts">

interface Props {
  title: string,
  imageSrc: string
}

defineProps<Props>()
</script>

<template>
  <div class="art-card">
    <img :src="imageSrc" alt="">
    <div class="art-card__title">
      {{ title }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.art-card {
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  img {
    width: 100%;
    border-radius: 12px;
  }
  &__title {
    padding: 0px 12px 12px;
    text-transform: uppercase;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
