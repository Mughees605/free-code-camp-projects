import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PollComponent } from './poll/poll.component';
import { CreatePollComponent } from './poll/create-poll/create-poll.component';
import { PollDetailComponent } from './poll/poll-detail/poll-detail.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { LogininRouteGuard } from './services/auth.guard';

import { Routes, RouterModule } from '@angular/router';

const appRouter: Routes = [
  {
    path: "", redirectTo: "poll", pathMatch: "full"
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: 'poll', component: PollComponent, canActivate : [LogininRouteGuard], children: [
      { path: '' , component : CreatePollComponent } ,
      { path: ':id/poll-detail', component : PollDetailComponent }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRouter)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { };
