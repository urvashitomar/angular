import { Component, OnInit } from '@angular/core';
import{BillServiceService} from '../bill-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  submitted=false;
  constructor(private billService :BillServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
    // this.save();
    }
}
