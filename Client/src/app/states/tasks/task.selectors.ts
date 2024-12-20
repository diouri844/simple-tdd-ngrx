import { createFeatureSelector, createSelector } from '@ngrx/store';
import { taskAdapter, TaskState } from './task.state';

export const selectTaskState = createFeatureSelector<TaskState>('tasks');

const { selectAll, selectEntities } = taskAdapter.getSelectors();

export const selectAllTasks = createSelector(selectTaskState, selectAll);
export const selectTaskEntities = createSelector(selectTaskState, selectEntities);
export const selectSelectedTaskId = createSelector(
    selectTaskState,
    (state) => state.selectedTaskId
);
export const selectSelectedTask = createSelector(
    selectTaskEntities,
    selectSelectedTaskId,
    (entities, selectedId) => selectedId ? entities[selectedId] : null
);
