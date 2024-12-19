import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Task } from './task.model';

export interface TaskState extends EntityState<Task> {
    selectedTaskId: number | null;
}

export const taskAdapter = createEntityAdapter<Task>();

export const initialTaskState: TaskState = taskAdapter.getInitialState({
    selectedTaskId: null,
});
