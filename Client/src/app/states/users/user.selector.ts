import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User } from './user.model';
import { UserState } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>('users');

export const selectAllUsers = createSelector(
  selectUserState,
  (state: UserState) => state.users
);

export const selectUserById = (userId: number) => createSelector(
  selectUserState,
  (state: UserState) => state.users.find(user => user.id === userId)
);