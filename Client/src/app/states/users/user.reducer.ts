import { createReducer, on } from '@ngrx/store';
import { User } from './user.model';
import { addUser, deleteUser, updateUser, loadUsersSuccess } from './user.action';

export interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: []
};

export const userReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users })),
  on(addUser, (state, { user }) => ({ ...state, users: [...state.users, user] })),
  on(updateUser, (state, { user }) => ({
    ...state,
    users: state.users.map(u => u.id === user.id ? user : u)
  })),
  on(deleteUser, (state, { id }) => ({
    ...state,
    users: state.users.filter(user => user.id !== id)
  }))
);