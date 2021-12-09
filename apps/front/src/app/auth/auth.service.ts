import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  globalResourcePrefix,
  authResourcePath,
  UserDto,
  CreateUserDto,
  LoginUserDto,
  RegisterUserDto
} from "@nx-tests/resources";
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  findUserById() : Observable<UserDto> {
    return this.httpClient.post<UserDto>(globalResourcePrefix + authResourcePath + '/login', {
      email: 'test@test.com',
      password: 'changeme'
    }).pipe(
      map(
        user => {
          console.log(user)
          return user;
        }
      )
    )
  }

  login(email: string, password: string) : Observable<LoginUserDto> {
    return this.httpClient.post<LoginUserDto>(globalResourcePrefix + authResourcePath + '/login', {
      email,
      password
    })
  }

  register(email: string, password: string): Observable<RegisterUserDto> {
    return this.httpClient.post<RegisterUserDto>(globalResourcePrefix + authResourcePath + '/register', {
      email: email,
      password: password,
    })
  }
}
