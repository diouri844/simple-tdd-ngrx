import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Task } from './task.model';
import { AppState, TaskState } from '../store/app.state';

export const selectTasksState = createFeatureSelector<AppState, TaskState>('tasks');

export const selectAllTasks = createSelector(
  selectTasksState,
  (state: TaskState) => state.tasks
);

export const selectTasksLoading = createSelector(
  selectTasksState,
  (state: TaskState) => state.loading
);

export const selectTasksError = createSelector(
  selectTasksState,
  (state: TaskState) => state.error
);

export const selectTaskById = (taskId: number) => createSelector(
  selectTasksState,
  (state:TaskState) => state.tasks.find(task => task.id === taskId)
);