
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Http, Response, Request, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import {PlatformLocation } from '@angular/common';
import { Subject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class CommonApis {
//  localhostUrl: string ="http://localhost:1801/SmartCityDashboardServer/";
localhostUrl: string =(this.platformLocation as any).location.origin+"/SmartCityDashboardServer/";
  flag:boolean=false;
  constructor(private http: Http,public platformLocation: PlatformLocation) {
   
    localStorage.setItem("localhostUrl", this.localhostUrl);
    
    
  }

  post_request(url, param) {
    return this.http.post(url, param).pipe(map((response: Response) => response));
  }
  get_request(url) {
    return this.http.get(url).pipe(map((response: Response) => response));
  }
  getData() {
    return this.http.get("assets/property.json")
    .pipe(map((res:Response) =>res.json())); //records in this case
  
}
// public mapChanges = new Subject<any>();
  



}
