import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Task } from './states/tasks/task.model';
import { Store, StoreModule } from '@ngrx/store';
import { addTask, deleteTask, loadTasks, loadTasksSuccess, updateTask } from './states/tasks/task.action';
import { CommonModule } from '@angular/common';
import { taskReducer } from './states/tasks/task.reducer';
import { Observable } from 'rxjs';
import { selectAllTasks } from './states/tasks/task.selectors';

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
  // setup tasks : 
  tasks$:Observable<Task[]>;
  constructor( private store :Store){
    this.tasks$ = this.store.select(selectAllTasks);
  }

  ngOnInit(){
    this.store.dispatch(loadTasks());
  }


  // setup action functions : 
  addNewTask(){
    console.dir("add task ");
    const newTask:Task = {
      id: 1,
      title : "New Task ",
      description : "This is a new task pushed to the list "
    };
    this.store.dispatch(addTask({ task: newTask }));
    console.log( this.store.select(selectAllTasks).pipe() );
    // this.store.dispatch(addTask({task:newTask}));
  };
  // update task : 
  editTask (newTaskPayload:Task){
    const updatedTask:Task = {...newTaskPayload, title: "updated Task", description:"this task has been updated"};
    this.store.dispatch(updateTask({task:updatedTask}));
  };
  // delete task : 
  removeTask(taskId:number){
    // this.store.dispatch(deleteTask({id:taskId}));
  }


}
