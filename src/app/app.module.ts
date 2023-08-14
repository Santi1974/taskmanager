import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TaskformComponent } from './components/taskform/taskform.component';
import { TaskComponent } from './components/task/task.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { TaskService } from './services/task.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TaskformComponent,
    TaskComponent,
    TasklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
