import ProjectsLayout from '@/modules/projects/layout/ProjectsLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProjectsLayout,
      children: [
        {
          path: 'projects',
          name: 'projects',
          component: () => import('@/modules/projects/views/ProjectsView.vue'),
        },
        {
          path: 'project/:id',
          props: true,
          name: 'project',
          component: () => import('@/modules/projects/views/ProjectView.vue'),
        },
      ],
    },
  ],
});

export default router;
