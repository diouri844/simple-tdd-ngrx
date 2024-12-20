import { createReducer, on } from '@ngrx/store';
import { addTask, deleteTask, loadTasks, loadTasksSuccess, updateTask } from './task.action';
// import { Task } from './task.model';
import { TaskState } from '../store/app.state';


export const initialState: TaskState = {
  tasks: [],
  loading:false,
  error: null
};

export const taskReducer = createReducer(
  initialState,
  on(loadTasks, state => ({ ...state, loading: true })),
  on(loadTasksSuccess, (state, { tasks }) => ({ ...state, tasks, loading: false })),
  on(addTask, (state, { task }) => ({ ...state, tasks: [...state.tasks, task] })),
  
  on(updateTask, (state, { task }) => ({
    ...state,
    tasks: state.tasks.map(t => t.id === task.id ? task : t)
  })),
  on(deleteTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter(task => task.id !== id)
  }))
);