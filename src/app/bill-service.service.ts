import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class BillServiceService {
  private baseUrl='http://localhost:8090/epowerbilling/api/user';
  private baseUrl2='http://localhost:8090/epowerbilling/api/conn';
  private baseUrl3='http://localhost:8090/epowerbilling/api/conn';
  private baseUrl4='http://localhost:8090/epowerbilling/api/billList/3';
  private baseUrl5='http://localhost:8090/epowerbilling/api/loginUser';
  private baseUrl6='http://localhost:8090/epowerbilling/api/update-password';
  constructor(private http: HttpClient) { }

  authentication(user):any
  { 
    return this.http.post(`${this.baseUrl5}`,user,{responseType:'text'});
  }

  updatePassword(user):any
  { console.log(user.newpass);
    return this.http.post(`${this.baseUrl6}`,user);
  }
  getUserList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getBillList(id: number):Observable<any>{
    return this.http.get(`${this.baseUrl4}`);
  }

  getUser(id: number): Observable<any> {
return this.http.get(`${this.baseUrl}/${id}`);
}

newUser(user: Object): Observable<Object> {
  return this.http.post(`${this.baseUrl}`, user);
  }

  newConnection(connection: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl2}`, connection);
    }

    newBill(bill: Object): Observable<Object> {
      return this.http.post(`${this.baseUrl3}`, bill);
      }

updateUser(id:number, value:any) :Observable<Object>{
  return this.http.put(`${this.baseUrl}/${id}`, value);
}
deleteUser(id:number) :Observable<any>{
  return this.http.delete(`${this.baseUrl}/${id}`, {responseType:'text'});
}
}
