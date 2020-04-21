import { Component, OnInit } from '@angular/core';
import { Payment } from '../payment';

@Component({
  selector: 'app-pay-bill',
  templateUrl: './pay-bill.component.html',
  styleUrls: ['./pay-bill.component.css']
})
export class PayBillComponent implements OnInit {
  pay:Payment=new Payment();
  submitted=false;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    this.submitted=true
  }

}
