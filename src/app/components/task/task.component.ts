import { Component, Input } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: Task;

  constructor(public taskService: TaskService) { }
  
  deleteTask(task: Task) {
    if(confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(task);
    }
  }
}
