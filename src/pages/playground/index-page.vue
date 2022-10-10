<script lang="ts" setup>
import {ref} from 'vue'

import BaseButton from 'src/ui/buttons/base-button.vue'
import BaseBackdrop from 'src/ui/backdrop/base-backdrop.vue'
import BaseInput from 'src/ui/inputs/base-input.vue'
import BaseTagList from 'src/ui/tags/base-tag-list.vue'
import BaseStyleCard from 'src/ui/cards/base-style-card.vue'
import BaseStyleCardList from 'src/ui/cards/style-card-list.vue'

const isOpen = ref(true)
const text = ref('')
const isActiveTag = ref(true)
</script>

<template>
  <div class="full-width q-px-md">
    <BaseButton yellow disabled @click="isActiveTag = !isActiveTag">
      Create
    </BaseButton>
    <BaseButton yellow @click="isActiveTag = !isActiveTag">
      Create
    </BaseButton>
    <BaseBackdrop v-model:isOpen="isOpen">
      Some content
    </BaseBackdrop>
    <BaseStyleCard >
      <template #image>
        <span></span>
      </template>
    </BaseStyleCard>
    <BaseInput class="mt" v-model="text" placeholder="Введите что-нибудь" :activeTag="isActiveTag"></BaseInput>
    <BaseInput class="mt" v-model="text" placeholder="Введите что-нибудь" activeTag></BaseInput>
    <BaseTagList>
    </BaseTagList>
    <BaseStyleCardList></BaseStyleCardList>
  </div>
</template>

<style>
.mt {
  margin-top: 10px;
}
</style>
