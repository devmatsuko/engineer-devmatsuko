<script setup lang="ts">
import { defineProps } from "vue";

type Title = {
  id: number,
  text: string,
}

type Body = {
  id: number,
  texts: string[],
}

type Props = {
  titles: Title[],
  bodies: Body[]
}
defineProps<Props>()

</script>

<template>
  <table class="table-auto border-collapse border-2 border-gray-500">
    <thead>
      <tr>
        <th v-for="title in titles" :key="title.id" class="border border-gray-400 px-4 py-2 text-gray-800">
          {{ title.text }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="body in bodies" :key="body.id">
        <td v-for="text in body.texts" :key="text" class="border border-gray-400 px-4 py-2">
          {{ text }}
        </td>
      </tr>
    </tbody>
  </table>
</template>