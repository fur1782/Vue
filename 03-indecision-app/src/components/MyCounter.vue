<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3 data-testid="square-label">Square: {{ counterSquare }}</h3>

    <div>
      <button class="btn" @click="counter++">+1</button>
      <button data-testid="substract-button" class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '../composables/useCounter';

const props = defineProps({
  value: { type: Number, required: true },
});

const { counter, counterSquare } = useCounter(props.value);

// interface Props {
//   value: number;
// }

// const props = defineProps<Props>();
</script>

<style scoped>
@reference 'tailwindcss';
.btn {
  @apply p-5 bg-blue-500 rounded hover:bg-blue-700 mr-5;
}
</style>
