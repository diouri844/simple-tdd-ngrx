import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Task } from './task.model';
import { AppState } from '../store/app.state';

export const selectTasksState = createFeatureSelector<AppState, Task[]>('tasks');

export const selectAllTasks = createSelector(
  selectTasksState,
  (tasks: Task[]) => tasks
);

export const selectTaskById = (taskId: number) => createSelector(
  selectTasksState,
  (tasks: Task[]) => tasks.find(task => task.id === taskId)
);