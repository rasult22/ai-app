<script lang="ts" setup>
import { ref, toRefs, watch} from 'vue'
import BaseBackdrop from 'src/ui/backdrop/base-backdrop.vue'
import BaseButton from 'src/ui/buttons/base-button.vue'

const props = defineProps<{name?: string }>()
const emit = defineEmits(['save'])
const { name } = toRefs(props)
const imageName = ref('')
const isBackdropOpen = ref(false)

watch(name, (val: string | undefined) => {
  if(val) {
    imageName.value = val
  }
}, { immediate: true })
const onSave = () => {
  emit('save', imageName.value)
  isBackdropOpen.value = false
}
</script>

<template>
  <div class="rename-backdrop">
    <div class="rename-backdrop__title-wrapper" @click="isBackdropOpen = true">
      <div v-if="imageName" class="rename-backdrop__title">
        {{ imageName }}
      </div>
      <div v-else class="rename-backdrop__title">
        Введите название работы
      </div>
       <img :src="require('src/assets/edit.svg')" alt="">
    </div>
  </div>
  <BaseBackdrop v-model:isOpen="isBackdropOpen">
    <template #title>
      <div class="rename-backdrop__title-small">
        Переименовать
      </div>
    </template>
    <div class="rename-backdrop__wrapper">
      <q-input class="rename-backdrop__input" v-model="imageName" counter maxlength="20" />
      <BaseButton @click="onSave" black>Сохранить</BaseButton>
    </div>
  </BaseBackdrop>
</template>

<style lang="scss" scoped>
.rename-backdrop {
  &__wrapper {
    padding: 32px 16px;
  }
  &__title {
    &-small {
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
    &-wrapper {
      display: flex;
      img {
        margin-left: 16px;
      }
    }
    border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
    text-align: left;
    padding: 4px 0;
  }
  font-family: Roboto;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0px;

  &__input {
    padding: 0 16px 32px;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0px;
    margin-bottom: 32px;
  }
}
</style>
