<template>
  <dialog id="my_modal_1" class="modal" :open="open">
    <div class="modal-box">
      <h3 class="text-lg font-bold">{{ title || 'Títol del Modal' }}</h3>
      <p class="py-4">{{ subtitle }}</p>
      <div class="modal-action flex flex-col">
        <form method="dialog" @submit.prevent="submitValue">
          <input
            ref="inputRef"
            type="text"
            :placeholder="placeholder || 'Introdueix un valor'"
            class="input input-bordered input-primary w-full flex-1"
            v-model="inputValue"
          />
          <!-- if there is a button in form, it will close the modal -->

          <div class="flex justify-end mt-5">
            <button class="btn mr-4" @click="closeModal">Close</button>
            <button type="submit" class="btn btn-primary">Acceptar</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>

  <div
    v-if="open"
    class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-50 w-screen h-screen"
  ></div>
</template>

<script lang="ts" setup>
import { nextTick, ref, watch } from 'vue';

interface Props {
  open: boolean;
  placeholder?: string;
  title?: string;
  subtitle?: string;
}

const props = defineProps<Props>();

const emits = defineEmits<{
  close: [void];
  value: [text: string];
}>();

const inputValue = ref('');
const inputRef = ref<HTMLInputElement | null>(null);

watch(props, async ({ open }) => {
  if (open) {
    await nextTick();
    setTimeout(() => {
      inputRef.value?.focus();
    }, 100);
  }
});

const submitValue = () => {
  if (!inputValue.value) {
    inputRef.value?.focus();
    return;
  }

  emits('value', inputValue.value.trim());
  emits('close');

  inputValue.value = '';
};

const closeModal = () => {
  emits('close');

  inputValue.value = '';
};
</script>
