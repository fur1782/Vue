<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Projecte</th>
          <th>Tasques</th>
          <th>Avanços</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(project, index) in projectsStore.projectList"
          :key="project.id"
          class="hover:bg-base-300"
        >
          <th>{{ index + 1 }}</th>
          <td>{{ project.name }}</td>
          <td>{{ project.tasks.length }}</td>
          <td>
            <progress class="progress progress-primary w-56" value="40" max="100"></progress>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <input-modal
    :open="modalOpen"
    @close="modalOpen = false"
    @value="projectsStore.addProject"
    title="Nou Projecte"
    placeholder="Introdueix nom del projecte"
  />

  <custom-modal :open="customModalOpen">
    <template #header>
      <h1 class="text-3xl">Títol del Modal</h1>
    </template>
    <template #body>
      <p>
        It is a long established fact that a reader will be distracted by the readable content of a
        page when looking at its layout.
      </p>
    </template>
    <template #footer>
      <div class="flex justify-end mt-5">
        <button @click="customModalOpen = false" class="btn mr-4">Close</button>
        <button @click="customModalOpen = false" class="btn btn-primary">Acceptar</button>
      </div>
    </template>
  </custom-modal>

  <fab-button @click="customModalOpen = true" position="bottom-left">
    <custom-icon />
  </fab-button>

  <fab-button @click="modalOpen = true">
    <add-circle />
  </fab-button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import FabButton from '@/modules/common/components/FabButton.vue';
import AddCircle from '@/modules/common/components/icons/AddCircle.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import CustomModal from '@/modules/common/components/CustomModal.vue';
import CustomIcon from '@/modules/common/components/icons/CustomIcon.vue';
import { useProjectsStore } from '../store/projects.store';

const modalOpen = ref(false);
const customModalOpen = ref(false);

const projectsStore = useProjectsStore();
</script>

<style scoped></style>
