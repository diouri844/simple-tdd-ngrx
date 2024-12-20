import { ActionReducerMap } from '@ngrx/store';
import { taskReducer } from '../tasks/task.reducer';
//import { userReducer } from '../states/users/user.reducer';
import { AppState } from './app.state';
import { userReducer } from '../users/user.reducer';

export const appReducer: ActionReducerMap<AppState> = {
    tasks: taskReducer,
    users: userReducer
};