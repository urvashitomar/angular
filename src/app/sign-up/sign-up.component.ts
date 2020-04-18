import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {FormsModule} from '@angular/forms';
import {BillServiceService} from '../bill-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user :User=new User();
  //address :Address =new Address();
  submitted=false;

  constructor(private billService :BillServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  newUser(): void {
    this.submitted = false;
    this.user= new User();
    }
    
    save() {
    this.billService.newUser(this.user)
    .subscribe(data => console.log(data), error => console.log(error));
    this.user= new User();
    this.gotoList();
    }
    
    onSubmit() {
    this.submitted = true;
    this.save();
    }
    
    gotoList() {
    this.router.navigate(['/login']);
    }
  

}
