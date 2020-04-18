import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component';
import {AboutComponent } from './about/about.component';
import {ContactUsComponent } from './contact-us/contact-us.component';
import {NavComponent} from './nav/nav.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [{path: '', component :HomeComponent},
{path : 'about',component : AboutComponent},
{path : 'contact-us',component: ContactUsComponent},
{path : 'nav',component: NavComponent},
{path : 'login', component : LoginComponent },
{path : 'sign-up', component : SignUpComponent},
{path: 'admin', component: AdminComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
