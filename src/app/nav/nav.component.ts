import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  appTitle = 'epower Billing';
  imagePath='/assets/images/logo.png';
  
  loginService:AuthenticationService;
  
  constructor() { }

  ngOnInit(): void {
  }
  isUserLoggedIn()
  {
    let user=sessionStorage.getItem('username');
    console.log(!(user==null))
    return !(user==null)
  }
  logout()
  {
    sessionStorage.removeItem('username')
  }
}
