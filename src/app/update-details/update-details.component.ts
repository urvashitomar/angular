import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {BillServiceService} from '../bill-service.service';
import { Router,ActivatedRoute } from '@angular/router';

import {Observable, from} from "rxjs";

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {
  id: number;
  user :User;
  submitted=false;
  users: Observable<User[]>;
  constructor(private route: ActivatedRoute, private router: Router,
    private billService :BillServiceService) { }

  ngOnInit(): void {
    this.user= new User();

    this.id=this.route.snapshot.params['id'];

    this.billService.getUser(this.id)
    .subscribe(data => {
      console.log(data)
      this.user=data;
    },error => console.log(error));
  }
  
  onSubmit(){
    this.updateProduct();
  }

  reloadDta()
  {
    this.users=this.billService.getUserList();
  }
  gotoList()
  {
    this.router.navigate(['/admin']);
  }
  updateProduct()
  {
    this.billService.updateUser(this.id,this.user)
    .subscribe(data=>console.log(data),error=> console.log(error));

    this.user=new User();
    this.reloadDta();
    this.gotoList();
  
  }

}
