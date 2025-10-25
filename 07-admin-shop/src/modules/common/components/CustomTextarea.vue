<template>
  <div>
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement)?.value ?? '')"
      @blur="$emit('blur')"
      id="title"
      :class="['form-control', { 'border-red-500': error }]"
    ></textarea>
    <span class="text-red-500" v-if="error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string | number;
  error?: string;
}

defineProps<Props>();

defineEmits(['update:modelValue', 'blur']);
</script>

<style scoped>
@reference "tailwindcss";

.form-control {
  @apply shadow h-32 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none;
}
</style>
