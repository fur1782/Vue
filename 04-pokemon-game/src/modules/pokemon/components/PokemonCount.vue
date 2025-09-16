<template>
  <div class="flex flex-col justify-center-safe items-center m-2">
    <h2>{{ title }}</h2>
    <p>{{ countNumber }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  countNumber: number;
}

defineProps<Props>();
</script>

<style scoped></style>
