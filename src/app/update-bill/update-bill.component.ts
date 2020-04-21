import { Component, OnInit } from '@angular/core';
import {BillServiceService} from '../bill-service.service';
import { Router } from '@angular/router';
import {Connection} from '../connection';
@Component({
  selector: 'app-update-bill',
  templateUrl: './update-bill.component.html',
  styleUrls: ['./update-bill.component.css']
})
export class UpdateBillComponent implements OnInit {
  bill: Connection=new Connection();

  submitted=false;
  constructor(private billService :BillServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  newBill(): void {
    this.submitted = false;
    this.bill= new Connection();
    }
    
    save() {
    this.billService.newBill(this.bill)
    .subscribe(data => console.log(data), error => console.log(error));
    this.bill= new Connection();
    this.gotoList();
    }
    
    onSubmit() {
    this.submitted = true;
    this.save();
    }
    
    gotoList() {
    this.router.navigate(['/admin']);
    }
  
}
