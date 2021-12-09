import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasklistComponent } from './tasklist/tasklist.component';
import {RouterModule, Routes} from "@angular/router";
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {
    path: '',
    component: TasklistComponent
  },
]


@NgModule({
  declarations: [
    TasklistComponent,
    TaskComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class TaskModule { }
