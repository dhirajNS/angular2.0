import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './app/user';

@Injectable({
  providedIn: 'root'
})
export class UserRegistationService {

  constructor(private http:HttpClient) { }


  public doRegistration(user:User){
    return this.http.post("http://localhost:9090/register",user,{responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get("http://localhost:9090/getAllUsers");
  }

  public getUserByEmail(email:String){
    return this.http.get("http://localhost:9090//findUser/"+email);
  }

  public deleteUser(id:number){
    return this.http.delete("http://localhost:9090/cancel/"+id);
  }
}