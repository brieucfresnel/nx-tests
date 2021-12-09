import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {RouterModule, Routes} from "@angular/router";
import {AuthService} from "./auth.service";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  }
]

@NgModule({
  declarations: [
    RegisterComponent,
    SignInComponent,
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
    ],
   providers: [
     AuthService
   ]
})
export class AuthModule { }
