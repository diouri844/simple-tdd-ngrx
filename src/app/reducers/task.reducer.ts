import { Task } from "../models/task.model";
import { addTask, updateTask, deleteTask } from "../actions/task.action";

export interface AppState {
    tasks: Task[]
};

export interface actionType {
    type:any;
    task: Task|null;
    id: number|null
};

export const intialState :AppState = {
    tasks: [] as Task[]
};


export function taskReducer(state:AppState = intialState, action:actionType):AppState{
    switch( action.type ){
        case addTask.type:
            return {
                ...state,
                tasks: [...state.tasks, action.task?]
            };
        case updateTask.type:
            return {
                ...state,
                tasks: state.tasks.map( 
                    (taskItem:Task)=> (taskItem.id === action.task?.id? action.task = taskItem)
                )
            };
        case deleteTask.type:
            return {
                ...state,
                tasks: state.tasks.filter( (taskItem:Task)=> taskItem.id !== action.id)
            };
        default:
            return state
    }
};