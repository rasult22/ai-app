<script lang="ts" setup>
import {computed, ref, watch} from 'vue'
import BaseInput from 'src/ui/inputs/base-input.vue'
import TagList from 'src/ui/tags/base-tag-list.vue'
import { Tag } from 'src/ui/tags/base-tag.vue'

const tagItems =  ref<Tag[]>([
  {
    text: 'Подводный город',
    active: false
  },
  {
    text: 'Туманный лес',
    active: false
  },
  {
    text: 'Кролик с белыми глазами',
    active: false
  },
  {
    text: 'Вавилонская Башня на Луне',
    active: false
  },
])
const isTagTextAndInputEqual = computed(() => {
  if(selectedTag.value) {
    return selectedTag.value.text === requestText.value
  }
  return false
})
const requestText = ref('')
const selectedTag = ref<Tag>()
const onTagSelected = (tag: Tag) => {
  if (selectedTag.value) {
    selectedTag.value.active = false
  }
  selectedTag.value = tag
  requestText.value = selectedTag.value.text
  tag.active = true
}
watch(requestText, val => {
  if (selectedTag.value) {
    if(selectedTag.value.text !== val) {
      selectedTag.value.active = false
      selectedTag.value = undefined
    }
  }
})
</script>


<template>
  <div class="request-text">
    <div class="request-text__title">
      Введите ваш запрос
    </div>
    <BaseInput
      v-model="requestText"
      class="request-text__input"
      placeholder="Введите что нибудь"
      :active-tag="isTagTextAndInputEqual"/>
    <TagList
      :tags="tagItems"
      @tag-selected="onTagSelected"
      class="request-text__taglist"/>
  </div>
</template>

<style lang="scss" scoped>
.request-text {
  &__title {
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: left;
    padding: 16px 0;
  }
  &__input {

  }
}
</style>
