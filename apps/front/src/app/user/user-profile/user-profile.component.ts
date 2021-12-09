import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'nx-tests-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user$: Observable<any> | undefined;

  constructor(private authService : AuthService) { }

  ngOnInit() {
   this.user$ = this.authService.findUserById();
  }

}
