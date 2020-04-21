import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {BillServiceService} from '../bill-service.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  submitted=false;
  id:number;
  user:User;
  constructor(private route: ActivatedRoute, private router: Router,
    private billService :BillServiceService) { }

  ngOnInit(): void {

    this.user = new User();

this.id = this.route.snapshot.params['id'];     /* Snapshot is used to get the Route Parameters */
// console.log(this.id);

/**
 * As a publisher, you create an Observable instance that defines a subscriber function.
 *  This is the function that is executed when a consumer calls the subscribe() method. 
 * The subscriber function defines how to obtain or generate values or messages to be published.
 */
this.billService.getUser(this.id)
.subscribe(data => {
console.log(data)
this.user = data;
}, error => console.log(error));
}
list(){
  this.submitted=true;
this.router.navigate(['/admin']);
  
  }

}
