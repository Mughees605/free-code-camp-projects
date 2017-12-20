import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PollComponent} from './poll/poll.component';
import { CreatePollComponent } from './poll/create-poll/create-poll.component';
import { PollDetailComponent } from './poll/poll-detail/poll-detail.component';
import { PollPostedComponent } from './poll/poll-posted/poll-posted.component';
// services
import { AuthService } from './services/auth.service';
import { PollService } from './services/poll.service';
import { LogininRouteGuard } from './services/auth.guard';
import { MypollComponent } from './poll/mypoll/mypoll.component';
import { PollListComponent } from './poll/poll-list/poll-list.component';
import { PollchartComponent } from './poll/pollchart/pollchart.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    PollComponent,
    CreatePollComponent,
    PollDetailComponent,
    PollPostedComponent,
    MypollComponent,
    PollListComponent,
    PollchartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AuthService,
    PollService,
    LogininRouteGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
