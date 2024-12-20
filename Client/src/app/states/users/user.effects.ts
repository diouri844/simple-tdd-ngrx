import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
// import { UserService } from '../../services/user.service';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './user.action';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    // private userService: any,
    private store: Store
  ) {}

//   loadUsers$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(loadUsers),
//       mergeMap(() =>
//         this.userService.getAllUsers().pipe(
//           map(users => loadUsersSuccess({ users })),
//           catchError(() => of(loadUsersFailure()))
//         )
//       )
//     )
//   );
}