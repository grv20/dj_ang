import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'; //use to handle async request and responses

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000/api";
readonly PhotoUrl = "http://127.0.0.1:8000/api/media/";
  constructor(private http:HttpClient) { }

  //department to consume GET Department API
  getDepList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/department/')
  }
}
