import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl='http://localhost:8090/epowerbilling/api/loginUser';
  constructor(private http: HttpClient) { }

  authentication1(user):Observable<any>{
    return this.http.get(`${this.baseUrl}`);
    // if(username =="urvashitomar02@gmail.com" && password=="123")
    // {
    //   sessionStorage.setItem("username",username)
    //   return true;
    // }
    // else{
    //   return false;
    // }
  }
  authentication(username,password){
    if(username =="urvashitomar02@gmail.com" && password=="123")
    {
      sessionStorage.setItem("username",username)
      return true;
    }
    else{
      return false;
    }
  }
  isUserLoggedIn()
  {
    let user=sessionStorage.getItem('username');
    console.log(!(user==null))
    return !(user==null)
  }
  logout()
  {
    sessionStorage.removeItem('username')
  }
}
