import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsServicesService {
api_keys="7fa6e562a1a34436bee0dda69d13e1c5"
  constructor(private httpclient:HttpClient) { }
  getAllNews():Observable<any>{
    return this.httpclient.get<any>("https://localhost:44308/api/News");
  }
  getbyId(id:number):Observable<any>{
    return this.httpclient.get(`https://localhost:44308/api/News/${id}`)
  }
  initSources(){
    return this.httpclient.get(''+this.api_keys)
  }
  login(userName:string,password:string):Observable<any>
  {
   let login = {userName,password}
   return this.httpclient.post("https://localhost:44308/api/Account/login" , login)
  }

  Registertion(login:any):Observable<any>
  {
   return this.httpclient.post("https://localhost:44308/api/Account/Register", login)
  }
}
