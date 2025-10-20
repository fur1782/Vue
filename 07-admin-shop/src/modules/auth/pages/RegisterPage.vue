<template>
  <h1 class="text-2xl font-semibold mb-4">Nou compte</h1>
  <form @submit.prevent="onResgister">
    <!-- Username Input -->
    <div class="mb-4">
      <label for="fullName" class="block text-gray-600">Nom</label>
      <input
        ref="fullNameInputRef"
        v-model="myForm.fullName"
        type="text"
        id="fullName"
        name="fullName"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>

    <!-- Username Input -->
    <div class="mb-4">
      <label for="email" class="block text-gray-600">Correu</label>
      <input
        ref="emailInputRef"
        v-model="myForm.email"
        type="email"
        id="username"
        name="username"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <!-- Password Input -->
    <div class="mb-4">
      <label for="password" class="block text-gray-600">Contrasenya</label>
      <input
        ref="passwordInputRef"
        v-model="myForm.password"
        type="password"
        id="password"
        name="password"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <!-- Forgot Password Link -->
    <div class="mb-6 text-blue-500">
      <a href="#" class="hover:underline">Contrasenya oblidada?</a>
    </div>
    <!-- Login Button -->
    <button
      type="submit"
      class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
    >
      Login
    </button>
  </form>
  <!-- Sign up  Link -->
  <div class="mt-6 text-blue-500 text-center">
    <RouterLink :to="{ name: 'login' }" class="hover:underline">Inicia sessió</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useAuthStore } from '../stores/auth.store';
import { useToast } from 'vue-toastification';

const emailInputRef = ref<HTMLInputElement | null>(null);
const fullNameInputRef = ref<HTMLInputElement | null>(null);
const passwordInputRef = ref<HTMLInputElement | null>(null);
const authStore = useAuthStore();
const toast = useToast();

const myForm = reactive({
  fullName: '',
  email: '',
  password: '',
});

const onResgister = async () => {
  if (myForm.email === '') {
    return emailInputRef.value?.focus();
  }
  if (myForm.email === '') {
    return emailInputRef.value?.focus();
  }

  if (myForm.password === '') {
    return passwordInputRef.value?.focus();
  }

  const ok = await authStore.register(myForm.fullName, myForm.email, myForm.password);

  if (ok.ok) return;

  toast.error(ok.message);
};
</script>
