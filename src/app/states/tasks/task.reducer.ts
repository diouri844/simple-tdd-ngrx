import { createReducer, on } from "@ngrx/store";
import { initialTaskState, taskAdapter } from "./task.state";
import * as TaskActions from "./task.action";


export const taskReducer = createReducer(
  initialTaskState,
  on(TaskActions.loadTasksSuccess, (state, { tasks}) => taskAdapter.setAll(tasks,state)),
  on(TaskActions.addTask, (state, { task }) =>  taskAdapter.addOne(task,state)),
  on(TaskActions.updateTask, (state, { task }) => taskAdapter.updateOne({id:task.id, changes:task},state)),
  on(TaskActions.deleteTask, (state, { id }) => taskAdapter.removeOne(id,state))
);