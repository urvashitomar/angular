import { Component, OnInit } from '@angular/core';
import {Connection} from '../connection';
import {BillServiceService} from '../bill-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-connection',
  templateUrl: './update-connection.component.html',
  styleUrls: ['./update-connection.component.css']
})
export class UpdateConnectionComponent implements OnInit {
  connection: Connection=new Connection();

  submitted=false;
  constructor(private billService :BillServiceService,private router:Router) { }

  ngOnInit(): void {
    
  }
  newConnection(): void {
    this.submitted = false;
    this.connection= new Connection();
    }
    
    save() {
    this.billService.newConnection(this.connection)
    .subscribe(data => console.log(data), error => console.log(error));
    this.connection= new Connection();
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
