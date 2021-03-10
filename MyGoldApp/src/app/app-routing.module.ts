import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', redirectTo :'/home', pathMatch :'full'},
  {path: 'home', component : HomeComponent},
  {path: 'about', component : AboutusComponent},
  {path: 'service', component : ProjectsComponent},
  {path: 'career', component : CareersComponent},
  {path: 'contact', component : ContactComponent},
  {path : 'signup', component:SignupComponent},
  {path : 'signin', component: SigninComponent},
  {path:'forgot', component : ForgotComponent},
  {path : '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
