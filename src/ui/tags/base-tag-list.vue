<script lang="ts" setup>
import {ref} from 'vue'
import BaseTag, {Tag} from './base-tag.vue'


const arr =  ref<Tag[]>([
  {
    text: 'text',
    active: false
  },
  {
    text: 'text',
    active: false
  },
  {
    text: 'text',
    active: false
  },
  {
    text: 'text',
    active: false
  },
  {
    text: 'text',
    active: false
  },
  {
    text: 'text',
    active: false
  },
])
const onTagClick = (tag: Tag) => {
  tag.active = !tag.active
}
</script>

<template>
  <div class="base-tag-list">
    <BaseTag class="base-tag-list__item" :active="item.active" v-for="(item, index) in arr" :key="index" @click="onTagClick(item)">
      {{ item.text }}
    </BaseTag>
  </div>
</template>

<style lang="scss" scoped>

.base-tag-list {
  display: flex;
  padding: 8px 0;
  overflow: scroll;
  &__item {
    margin-right: 8px;
  }
}
</style>
