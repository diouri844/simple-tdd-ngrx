export interface AppState {
  tasks: TaskState;
  users: UserState;
}

export interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

export interface Task {
  id: number;
  title: string;
  description: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}