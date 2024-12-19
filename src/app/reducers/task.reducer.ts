import { Task } from "../models/task.model";
import { addTask, updateTask, deleteTask } from "../actions/task.action";


export interface AppState {
    tasks: Task[]
};


export const intialState :AppState = {
    tasks: [] as Task[]
};


export function taskReducer(state:AppState = intialState, action:any):AppState{
    switch( action.type ){
        default:
            return state
    }
};