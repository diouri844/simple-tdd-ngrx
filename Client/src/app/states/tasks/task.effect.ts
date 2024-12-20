import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
// import { TaskService } from '../../services/task.service';
// import { loadTasks, loadTasksSuccess, loadTasksFailure, addTask, addTaskSuccess, addTaskFailure } from './task.action';
// import { catchError, map, mergeMap } from 'rxjs/operators';
// import { of } from 'rxjs';

@Injectable()
export class TaskEffects {
  constructor(
    private actions$: Actions,
    // private taskService: TaskService,
    private store: Store
  ) {}

//   loadTasks$ = createEffect(() =>
//     // this.actions$.pipe(
//     //   ofType(loadTasks),
//     //   mergeMap(() =>
//     //     this.taskService.getTasks().pipe(
//     //       map(tasks => loadTasksSuccess({ tasks })),
//     //       catchError(error => of(loadTasksFailure({ error })))
//     //     )
//     //   )
//     //)
//   {});

//   addTask$ = createEffect(() =>
//     // this.actions$.pipe(
//     //   ofType(addTask),
//     //   mergeMap(action =>
//     //     this.taskService.addTask(action.task).pipe(
//     //       map(task => addTaskSuccess({ task })),
//     //       catchError(error => of(addTaskFailure({ error })))
//     //     )
//     //   )
//     // )
//   );
}