import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Task } from './states/tasks/task.model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './states/store/app.state';
import * as taskSelectore from './states/tasks/task.selectors';
import { addTask, deleteTask, loadTasks, updateTask } from './states/tasks/task.action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx-crud-app';
  tasks$: Observable<Task[]>;
  loading$: Observable<boolean>;
  error$: Observable<string|null>;
  taskList :Task[] = [];
  // setup tasks : 
  constructor( private store :Store<AppState>){
    this.tasks$ = this.store.select(taskSelectore.selectAllTasks);
    this.loading$ = this.store.select(taskSelectore.selectTasksLoading);
    this.error$ = this.store.select(taskSelectore.selectTasksError);
  }
  
  ngOnInit(){
    this.store.dispatch(loadTasks());
    this.tasks$.subscribe(
      tasks => {
        this.taskList = tasks 
      }
    );
    console.log( this.taskList);
  };


  // setup action functions : 
  addNewTask(){
    console.dir("add task ");
    const newTask:Task = {
      id: 1,
      title : "New Task ",
      description : "This is a new task pushed to the list "
    };
    // call dispatcher : 
    this.store.dispatch(addTask({task:newTask}));
    // shows up 
  };
  // update task : 
  editTask (newTaskPayload:Task){
    const updatedTask:Task = {...newTaskPayload, title: "updated Task", description:"this task has been updated"};
    this.store.dispatch(updateTask({task:updatedTask}));
  };
  // delete task : 
  removeTask(taskId:number){
    this.store.dispatch(deleteTask({ id: taskId }));
  }
}
