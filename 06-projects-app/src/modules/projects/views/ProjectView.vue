<template>
  <div class="w-full">
    <section class="m-2">
      <bread-crumbs :name="project?.name ?? 'No name'"></bread-crumbs>
    </section>

    <section class="m-2">
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th class="w-14">Complete</th>
              <th>Task</th>
              <th>Complet at</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-base-300" v-for="task in project?.tasks" :key="task.id">
              <th>
                <input
                  type="checkbox"
                  :checked="!!task.completedAt"
                  class="checkbox checkbox-primary"
                  @change="projectStore.toogleTask(project?.id ?? '', task.id)"
                />
              </th>
              <td>{{ task.name }}</td>
              <td>{{ task.completedAt }}</td>
            </tr>
            <tr class="hover:bg-base-300">
              <th></th>
              <td>
                <input
                  v-model="inputName"
                  type="text"
                  class="input input-primary w-full opacity-60 transition-all hover:opacity-100 focus:opacity-100"
                  placeholder="new task"
                  @keyup.enter="addElementToList"
                />
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
import { useProjectsStore } from '../store/projects.store';
import { ref, watch } from 'vue';
import type { Project } from '../interfaces/project.interface';
import { useRouter } from 'vue-router';

interface Props {
  id: string;
}

const router = useRouter();

const props = defineProps<Props>();
const projectStore = useProjectsStore();
const project = ref<Project | undefined>();

const inputName = ref('');

// const project = projectStore.projectList.find((project) => project.id === props.id);

const addElementToList = () => {
  if (!project.value) return;

  projectStore.addTaskToProject(inputName.value, project.value.id);

  inputName.value = '';
};

watch(
  () => props.id,
  () => {
    project.value = projectStore.projectList.find((project) => project.id === props.id);
    if (project.value === undefined) {
      router.replace('/');
    }
  },
  {
    immediate: true,
  },
);
</script>
