import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component';
import {AboutComponent } from './about/about.component';
import {ContactUsComponent } from './contact-us/contact-us.component';
import {NavComponent} from './nav/nav.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import { AdminComponent } from './admin/admin.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import {UpdateBillComponent} from './update-bill/update-bill.component';
import {UpdateConnectionComponent} from './update-connection/update-connection.component';
import {UserComponent} from './user/user.component';
import {BillSummaryComponent} from './bill-summary/bill-summary.component';
import {PayBillComponent} from './pay-bill/pay-bill.component';
import {ChangePasswordComponent} from './change-password/change-password.component';

const routes: Routes = [{path: '', component :HomeComponent},
{path : 'about',component : AboutComponent},
{path : 'contact-us',component: ContactUsComponent},
{path : 'nav',component: NavComponent},
{path : 'login', component : LoginComponent },
{path : 'sign-up', component : SignUpComponent},
{path: 'admin', component: AdminComponent },
{path: 'details/:id', component: UserDetailsComponent},
{path: 'update/:id', component:UpdateDetailsComponent},
{path: 'updatebill', component:UpdateBillComponent},
{path: 'updateconn', component:UpdateConnectionComponent},
{path: 'user', component:UserComponent},
{path: 'billsummary',component: BillSummaryComponent},
{path: 'paybill',component: PayBillComponent},
{path: 'changepass', component:ChangePasswordComponent}]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
