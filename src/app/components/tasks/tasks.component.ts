import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task';
import { TaskService } from 'src/app/services/task.service'; 
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TASKS } from 'src/app/mock-tasks';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
tasks:Task[] = [];

  constructor (private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task: Task) {
    this.taskService
    .deleteTask(task) 
    .subscribe(
         //calling for deleteTask in task.service.ts and when is done the code bellow will be execute
         () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
         );
        }
  
      
      toggleReminder(task: Task) {
        task.reminder = !task.reminder;
        this.taskService.updateTaskReminder(task).subscribe();
      }
      
    
      addTask(task: Task) {
        this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)))
      };
    }
      
