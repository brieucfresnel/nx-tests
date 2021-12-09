import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TaskDto} from "@nx-tests/resources";
import {globalResourcePrefix} from "@nx-tests/resources";
import {TaskService} from '../task.service';

@Component({
  selector: 'nx-tests-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent {

  readonly tasks$ = this.taskService.findAll()

  constructor(private taskService: TaskService) {
  }


}
