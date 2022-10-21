<script lang="ts" setup>
import { useProcess } from 'src/composables/useProcess';
import BaseImage from 'src/ui/images/base-image.vue'
import RenameBackdropFeature from 'src/features/rename-backdrop/rename-backdrop-feature.vue'
const {} = useProcess()

const onRefresh =() => {
  //
}
const onDownload =() => {
  //
}
</script>


<template>
  <div class="main-page full-width q-px-md">
    <BaseImage @download="onDownload" @refresh="onRefresh" src="https://i.redd.it/2unqm5kmwwn91.jpg" refresh download></BaseImage>
    <RenameBackdropFeature></RenameBackdropFeature>
  </div>
</template>
