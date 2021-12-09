import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../auth.service";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'nx-tests-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private authService: AuthService) {
  }

  registerForm : any = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  onSubmit() {
    this.authService.register(this.registerForm.value.email, this.registerForm.value.password)
      .pipe(
        map(user => console.log(user))
      )
      .subscribe()
  }
}
