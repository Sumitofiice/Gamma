import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonApis } from '../commonClass/commonApi';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(public commonApi:CommonApis) { }
 
  checkusernameandpassword(uname: string, pwd : string): Observable<boolean>  
  {
    console.warn(uname,pwd);
    return new Observable<boolean>( observer => {
      this.commonApi.post_request("http://34.121.49.132/login",{"email_id":uname,"password":pwd}).subscribe(data => {
      let vmdData: any = data;
 
  console.log("apiData",vmdData)
    if(vmdData.status==200){
       vmdData = vmdData.json();
      // localStorage.setItem('token',vmdData.data.token);
      // sessionStorage.setItem('token',vmdData.data.token);
      sessionStorage.setItem('_id',vmdData.email_id);
       //  return true;
       return observer.next(true);
   }
   else{
     // return false;
     return observer.next(false);
   }

})

   
//    if(uname == "admin" && pwd =="admin123"){
//    localStorage.setItem('username',"admin");
//    sessionStorage.setItem('username',"admin");
//     //  return true;
//     return observer.next(true);
// }
// else{
//   // return false;
//   return observer.next(false);
// }

// this.coomonApi.post_request("https://api.akademe.co/rest/private/interview/v1/student/signIn",{"email":,"password":})
 
  })
}
}