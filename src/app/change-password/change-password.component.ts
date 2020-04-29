import { Component, OnInit } from '@angular/core';
import{BillServiceService} from '../bill-service.service';
import { Router } from '@angular/router';
import {User} from '../user';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  user:User=new User();
  submitted=false;
  invalidLogin=false;
  passSuccess=false;
  confirmpass='';
  errorMessage='Password not matched';
  successMessage: string;
  constructor(private billService :BillServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit() {

    this.submitted = true;
    // this.save();
    if(this.user.newpass != this.confirmpass)
    {
      this.invalidLogin=true;
      this.passSuccess=false;
      this.successMessage='Password not Changed';
    }
    else
    {
      this.user.email=sessionStorage.getItem("userId");
      this.billService.updatePassword(this.user)
      .subscribe(data=>{
        console.log(data)
        console.log(this.user.email)
        if(data == true)
        {
          this.router.navigate(['/login']);
      this.invalidLogin=false;
      this.passSuccess=true
      this.successMessage='Password Changed Successful';
        }
        else
        {
          //this.router.navigate(['/login']);
          this.invalidLogin=true;
         this.passSuccess=false;
         this.successMessage='Password not Changed';
        }
      })
    }

    }
}
