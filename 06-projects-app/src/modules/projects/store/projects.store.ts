import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project, Task } from '../interfaces/project.interface';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '@vueuse/core';

// const initialLoad = (): Project[] => {
//   const projects: Project[] = [
//     {
//       id: uuidv4(),
//       name: 'Project 1',
//       tasks: [],
//     },
//     {
//       id: uuidv4(),
//       name: 'Project 2',
//       tasks: [],
//     },
//   ];

//   return projects;
//   // return
// };

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref(useLocalStorage<Project[]>('projects', []));

  const addProject = (name: string) => {
    if (name.length === 0) {
      return;
    }

    projects.value.push({
      id: uuidv4(),
      name: name,
      tasks: [],
    });
  };

  const addTaskToProject = (name: string, id: string) => {
    const newTask: Task = {
      id: uuidv4(),
      name: name,
    };

    if (name.length === 0) {
      return;
    }

    const project = projects.value.find((project) => project.id === id);

    if (!project) {
      return;
    }

    project.tasks.push(newTask);
  };

  const toogleTask = (projectId: string, taskId: string) => {
    const project = projects.value.find((project) => project.id === projectId);
    if (!project) return;

    const task = project.tasks.find((task) => task.id === taskId);
    if (!task) return;

    task.completedAt = task.completedAt ? undefined : new Date();
  };

  return {
    // Properties
    projects,

    //Getters
    projectList: computed(() => [...projects.value]),
    noProjects: computed(() => projects.value.length === 0),

    projectsWithCompletion: computed(() => {
      const completeProjects = projects.value.map((project) => {
        return {
          id: project.id,
          name: project.name,
          taskCount: project.tasks.length,
          completion: project.tasks.filter((task) => task.completedAt).length,
        };
      });

      return completeProjects;
    }),

    //Actions
    addProject,
    addTaskToProject,
    toogleTask,
  };
});
