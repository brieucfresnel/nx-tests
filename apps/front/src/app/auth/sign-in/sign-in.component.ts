import {Component} from '@angular/core';
import {AuthService} from '../auth.service';
import {FormControl, FormGroup} from "@angular/forms";
import {map} from "rxjs/operators";

@Component({
  selector: 'nx-tests-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  loginForm: any = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private authService: AuthService) {
  }

    onSubmit() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
      .pipe(
        map(user => console.log(user))
      )
      .subscribe()
  }
}
