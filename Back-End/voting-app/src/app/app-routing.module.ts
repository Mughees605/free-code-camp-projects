import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const appRouter: Routes = [
    {
      path: "", redirectTo: "home", pathMatch: "full"
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
        path:'create-poll', component: CreatePollComponent
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
  
  export class AppRoutingModule{};
  