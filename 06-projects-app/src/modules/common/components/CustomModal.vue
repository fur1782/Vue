<template>
  <dialog id="my_modal_2" class="modal" :open="open">
  <div class="modal-box">

    <div class="border-b border-blue-500">
      <!-- Header -->
       <slot name="header"></slot>
    </div>

    <div class="my-5">
      <slot name="body"></slot>
    </div>

    <div class="border-t border-t-blue-500">
      <slot name="footer"></slot>
    </div>

  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>

<div
v-if="open"
  class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-50 w-screen h-screen"
></div>
</template>

<script setup lang="ts">

interface Props {
  open?: boolean;
}

withDefaults(defineProps<Props>(), {
  open: false,
})

</script>

<style scoped>

</style>
