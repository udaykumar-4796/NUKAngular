import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForgotComponent } from './forgot/forgot.component';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './home/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './home/employee-details/employee-details.component';
import { EmployeeService } from './home/employee.service';
import {HttpClientModule} from '@angular/common/http';
import { CareerService } from './career.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutusComponent,
    HomeComponent,
    ProjectsComponent,
    CareersComponent,
    ContactComponent,
    SigninComponent,
    SignupComponent,
    PageNotFoundComponent,
    ForgotComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService,CareerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
