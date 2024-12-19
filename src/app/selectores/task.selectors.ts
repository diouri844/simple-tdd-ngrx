import { createSelector } from "@ngrx/store";
import { Task } from "../models/task.model";
import { AppState } from "../reducers/task.reducer";

export const selectTasks = ( state : AppState) => state.tasks as Task[];

export const selectTaskById = (id:number)=> createSelector(
    selectTasks, tasks => tasks.find(taskItem => taskItem.id === id)
);
