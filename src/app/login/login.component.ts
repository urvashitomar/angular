import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { from } from 'rxjs';
import {AuthenticationService} from '../authentication.service';
import { User } from '../user';
import { BillServiceService } from '../bill-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User=new User();
  email='';
  password='';
  invalidLogin=false;
  errorMessage='Inavlid Credentials'
  successMessage: string;
  loginSuccess=false;
  msg:string;

  constructor(private router: Router, private billService:BillServiceService) { }

  ngOnInit(): void {
  }
  checkLogin()
  { this.msg=this.billService.authentication(this.user)
   .subscribe(data =>{ console.log(data)
    
    if(data=="admin")
    {
      sessionStorage.setItem("userId",this.user.email);
      this.router.navigate(['/admin']);
      this.invalidLogin=false;
      this.loginSuccess=true
      this.successMessage='Login Successful';

    }
    if(data=="user")
    {
      sessionStorage.setItem("userId",this.user.email);
      this.router.navigate(['/user']);
      this.invalidLogin=false;
      this.loginSuccess=true
      this.successMessage='Login Successful';
    }
    else
    {
      this.invalidLogin=true;
      this.loginSuccess=false;
    }
    
  })

  }
}
