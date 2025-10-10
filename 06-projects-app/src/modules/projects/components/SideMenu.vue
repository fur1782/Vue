<template>
  <aside class="bg-base-200 w-72 min-h-screen">
    <h2 class="text-lg font-bold mx-4">
      <RouterLink to="/projects"> Projectes </RouterLink>
    </h2>
    <p v-if="projectsStore.noProjects" class="text-sm text-gray-500 mx-4">No hi ha projectes</p>

    <!-- Menu -->
    <ul v-else class="menu rounded-box w-56">
      <li v-for="project in projectsStore.projectList" :key="project.id">
        <template v-if="project.tasks.length > 0">
          <details>
            <summary>
              <router-link :to="`/project/${project.id}`">{{ project.name }}</router-link>
            </summary>
            <ul>
              <li v-for="task in project.tasks" :key="task.id">
                <router-link :to="`/project/${project.id}`">{{ task.name }}</router-link>
              </li>
            </ul>
          </details>
        </template>

        <template v-else>
          <summary>
            <router-link :to="`/project/${project.id}`">{{ project.name }}</router-link>
          </summary>
        </template>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useProjectsStore } from '../store/projects.store';

const projectsStore = useProjectsStore();
</script>

<style scoped></style>
