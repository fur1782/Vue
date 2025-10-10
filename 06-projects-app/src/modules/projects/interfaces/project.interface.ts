export interface Project {
  id: string;
  name: string;
  tasks: Task[];
}

export interface Task {
  id: string;
  name: string;
  completedAt?: Date | null;
}

export interface CompletationProject {
  id: string;
  name: string;
  taskCount: number;
  completion: number;
}
