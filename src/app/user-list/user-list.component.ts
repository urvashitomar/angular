import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { User } from '../user';
import {BillServiceService} from '../bill-service.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:Observable<User[]>;
  constructor(private billService :BillServiceService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.users =this.billService.getUserList();
  }
  userDetails(id:number){
    this.router.navigate(['details',id])
    }
    editUser(id: number)
    {
      this.router.navigate(['update',id])
    }

    deleteUser(id: number)
    {
      this.billService.deleteUser(id)
      .subscribe(data=>{
        console.log(data);
        this.reloadData();
      },
      error=> console.log(error));
    }
}
