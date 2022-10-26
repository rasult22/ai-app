<script setup lang="ts">
import ArtCard from 'src/ui/cards/art-card.vue';
</script>

<template>
  <div class="profile-saved-arts">
    <ArtCard class="profile-saved-arts__item" image-src="https://miro.medium.com/max/1370/1*Yzesp8TtwwuwFnzb75MjxA.png" title="Some title"></ArtCard>
    <ArtCard class="profile-saved-arts__item" image-src="https://miro.medium.com/max/1370/1*Yzesp8TtwwuwFnzb75MjxA.png" title="Some title"></ArtCard>
    <ArtCard class="profile-saved-arts__item" image-src="https://miro.medium.com/max/1370/1*Yzesp8TtwwuwFnzb75MjxA.png" title="Some title"></ArtCard>
    <ArtCard class="profile-saved-arts__item" image-src="https://miro.medium.com/max/1370/1*Yzesp8TtwwuwFnzb75MjxA.png" title="Some title"></ArtCard>
    <ArtCard class="profile-saved-arts__item" image-src="https://miro.medium.com/max/1370/1*Yzesp8TtwwuwFnzb75MjxA.png" title="Some title"></ArtCard>
    <ArtCard class="profile-saved-arts__item" image-src="https://miro.medium.com/max/1370/1*Yzesp8TtwwuwFnzb75MjxA.png" title="Some title"></ArtCard>
    <ArtCard class="profile-saved-arts__item" image-src="https://miro.medium.com/max/1370/1*Yzesp8TtwwuwFnzb75MjxA.png" title="Some title"></ArtCard>
  </div>
</template>

<style lang="scss" scoped>
.profile-saved-arts {
  display: flex;
  flex-wrap: wrap;
  padding: 24px 0;
  gap: 15px;
  &__item {
    width:  calc(50% - 7.5px);
  }
}
</style>
