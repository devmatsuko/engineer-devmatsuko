<script setup lang="ts">
import { defineProps } from 'vue'
import "vue3-carousel/dist/carousel.css";
import { Carousel, Navigation, Slide } from "vue3-carousel";

type Image = {
  id: number,
  src: string,
}

type Props = {
  images: Image[]
}

defineProps<Props>()
</script>

<template>
  <div class="container mx-auto">
    <Carousel>
      <template #slides>
        <Slide v-for="(image, index) in images" :key="image.id">
          <img class="rounded-full w-96 h-96 object-cover user-drag-none" :src="image.src" />
        </Slide>
      </template>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<style scoped>
.user-drag-none {
  user-drag: none;
  -webkit-user-drag: none;
  -moz-user-select: none;
}
</style>