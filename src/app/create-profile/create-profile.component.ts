import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { Router } from '@angular/router';
import { CommonApis } from '../commonClass/commonApi';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    // lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
    
   });
  constructor(public commonApi:CommonApis,public router: Router) {}

  //   openLink(event: MouseEvent): void {
  //     this._bottomSheetRef.dismiss();
  //     event.preventDefault();
  //   }

  ngOnInit() {
    console.log(sessionStorage.getItem('_id'))
  }
  onSubmit() {
  console.log(this.form.value)
    // alert(JSON.stringify(this.form.value));
    this.commonApi.post_request("http://34.121.49.132/sign_up",this.form.value).subscribe(res =>
    {
      console.log(res.json())
      var data=res.json();
      if(data.status==200)
      {
        alert('Profile Created Sucessfully');
      }
      else if(data.status==400)
      {
        alert('User Exists');
      }
    }
    ,
    error => {
      console.log("data error", error);
      var msg=JSON.parse(error._body)
        alert(msg.message)
    })

   
  }
  // close()
  // {
  //   this._bottomSheet.dismiss()
  // }
  get firstname(){
    return this.form.get('firstName')
  }
  routeClick(val)
  {
    // alert()
    this.router.navigateByUrl(val);
  }
  
}
