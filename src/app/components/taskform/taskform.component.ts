import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})

export class TaskformComponent {
  title: string;

  constructor(
    public taskService: TaskService
  ){}
  
  addTask(newTask: HTMLInputElement, event: Event){
    event.preventDefault();
    this.taskService.addTask({title: newTask.value})
    newTask.value = '';
  }
}
