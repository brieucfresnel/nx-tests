import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TaskModule} from './task/task.module';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from "./http/http.module";
import {AuthModule} from "./auth/auth.module";
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./task/task.module').then(module => module.TaskModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/users.module').then(module => module.UsersModule)
  },
]

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    HttpModule,
    TaskModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
