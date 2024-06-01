import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

  authenticate(username:string,password:string){
    if(username=="abc"  && password=="abc"){
      sessionStorage.setItem("username",username);
      return true;
    }
    else{
      return false;
    }
  }

  isUserLoggedIn(){
    console.log("Doctor logged In");
    let user=sessionStorage.getItem("username");
    return !(user==null);
  }

  logout(){
    sessionStorage.removeItem('username');
    console.log("Doctor logged In");
  }
}
