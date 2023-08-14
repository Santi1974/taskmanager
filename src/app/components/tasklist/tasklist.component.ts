import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {

  tasks: Task[];

  constructor(
    public taskService: TaskService
  ){}
  
  ngOnInit(){
    this.tasks = this.taskService.getTasks();
  }

  addTask(task: Task) {
    this.taskService.addTask(task);
  }
}
