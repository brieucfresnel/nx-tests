import {Component, Input} from '@angular/core';
import {TaskDto} from "@nx-tests/resources";

@Component({
  selector: 'nx-tests-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input() data : TaskDto = {id: -1, content: ''};

}
