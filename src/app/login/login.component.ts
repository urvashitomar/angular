import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { from } from 'rxjs';
import {AuthenticationService} from '../authentication.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User=new User();
  username='';
  password='';
  invalidLogin=false;
  errorMessage='Inavlid Credentials'
  successMessage: string;
  loginSuccess=false;

  constructor(private router: Router, private loginservice:AuthenticationService) { }

  ngOnInit(): void {
  }
  checkLogin()
  { 
    if(this.loginservice.authentication1(this.user))
    {
      this.router.navigate(['/admin']);
      this.invalidLogin=false;
      this.loginSuccess=true
      this.successMessage='Login Successful';

    }
    else
    {
      this.invalidLogin=true;
      this.loginSuccess=false;
    }
  }

}
