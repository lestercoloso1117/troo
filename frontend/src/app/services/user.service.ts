import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

    


@Injectable({
  providedIn: 'root'
})
export class UserService {

  api_url: string = "http://localhost:8080/";

  constructor(
    private http: HttpClient
  ) { }

  getUsers(filter:any = {}){
    return this.http.post(`${this.api_url}User/list`, filter);
  }
  getUser(id:Number = 0){
    return this.http.get(`${this.api_url}User/${id}`);
  }
  saveUser(data:any = {}){
    return this.http.post(`${this.api_url}User`,data);
  }
  updateUser(data:any = {}){
    return this.http.put(`${this.api_url}User`,data);
  }
  deleteUser(id:Number = 0, data:any = {}){
    return this.http.delete(`${this.api_url}User/${id}`);
  }
}
