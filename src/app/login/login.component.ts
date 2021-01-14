import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginVO } from '../model/LoginVO';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  userName = ''
  password = ''
  loginVO = new LoginVO("");
  isLoginErrorNeeded = false
  constructor(private router:Router,
    private authentication : AuthenticationService) { }

  ngOnInit() {
  }

  handlelogin(){
    if(this.loginVO.authenticatedString ==='Authenticated'){
      this.router.navigate(['searchBook',this.userName])
      this.isLoginErrorNeeded= false;
    }else{
      this.isLoginErrorNeeded= true;
    }
  }

  getAuthentecation(){
    this.authentication.authenticate(this.userName,this.password).subscribe(
      response => {
        this.loginVO=response;
        this.handlelogin();
      }
    );
     }

}
