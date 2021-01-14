import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { LoginVO } from '../model/LoginVO';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  authenticate(userName: string, password: string) {
    sessionStorage.setItem('authenticaterUser', userName);
    let userModel = new User(userName,password,'dummy');
    console.log(userModel);
    return this.http.post<LoginVO>('http://localhost:8088/login',userModel,{
      headers:new HttpHeaders({
        'Content-Type':'application/json',
      })
    });
  }
  
  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }

}
