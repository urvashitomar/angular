import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router,ActivatedRoute } from '@angular/router';
import { Connection } from '../connection';
import {BillServiceService} from '../bill-service.service';

@Component({
  selector: 'app-bill-summary',
  templateUrl: './bill-summary.component.html',
  styleUrls: ['./bill-summary.component.css']
})
export class BillSummaryComponent implements OnInit {
  id:number;
  bills:Observable<Connection[]>;
  constructor(private route: ActivatedRoute, private router: Router,
    private billService :BillServiceService) { }

  ngOnInit(): void {
    // this.bills = new User();
    this.reloadData();
this.id = this.route.snapshot.params['billId']; 
// this.router.navigate(['billsummary',id])
  }
  reloadData(){
    this.bills =this.billService.getBillList(this.id);
  }
  // userDetails(id:number){
  //   this.router.navigate(['details',id])
  //   }
  //   editUser(id: number)
  //   {
  //     this.router.navigate(['update',id])
  //   }

  //   deleteUser(id: number)
  //   {
  //     this.billService.deleteUser(id)
  //     .subscribe(data=>{
  //       console.log(data);
  //       this.reloadData();
  //     },
  //     error=> console.log(error));
  //   }
}
