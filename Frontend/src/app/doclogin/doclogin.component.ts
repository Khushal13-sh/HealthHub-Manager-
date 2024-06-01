import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrl: './doclogin.component.css'
})
export class DocloginComponent {

  username:string="";
  password:string="";

  inValidLogin=false;

  constructor(private router:Router, private docauth:DocauthService){}

  checkLogin(){
    if(this.docauth.authenticate(this.username,this.password)){
      this.inValidLogin=false;
      this.router.navigate(['docdash']);   
    }
    else{
      alert("Wrong Credentials")
      this.inValidLogin=true;
      this.router.navigate(['home']);
    }
  }

 
}
