import { Injectable } from '@angular/core';
import {globalResourcePrefix, TaskDto, taskResourcePath} from "@nx-tests/resources";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly resourceUrl = `${globalResourcePrefix}${taskResourcePath}`;

  constructor(private httpClient : HttpClient) { }

  findAll(): Observable<TaskDto[]> {
    return this.httpClient.get<TaskDto[]>(this.resourceUrl);
  }

  save(): Observable<TaskDto> {
    return this.httpClient.post<TaskDto>(this.resourceUrl, { message: 'Hey' });
  }
}
