import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }

  authenticate(username:string,password:string){
    if(username=="xyz" && password=="xyz"){
      sessionStorage.setItem('username2',username);
      return true;
    }
    else{
      return false;
    }
  }

  isUserLoggedIn(){
    console.log("User logged in");
    let user=sessionStorage.getItem('username2');
    return !(user==null);
  }

  logout(){
    console.log("User logged out");
    sessionStorage.removeItem('username2');
  }
}
