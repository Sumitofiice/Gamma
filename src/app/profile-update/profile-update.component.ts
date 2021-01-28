import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApis } from '../commonClass/commonApi';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {
  form = new FormGroup({
    company_name: new FormControl(''),
    // lastName: new FormControl('', Validators.required),
    description: new FormControl(''),
    location: new FormControl(''),
    start_date: new FormControl(''),
    title: new FormControl(''),
    email_id:new FormControl(sessionStorage.getItem('_id'))
   });
  constructor(public commonApi:CommonApis,public router: Router) {}

  //   openLink(event: MouseEvent): void {
  //     this._bottomSheetRef.dismiss();
  //     event.preventDefault();
  //   }
valuedata={}
  ngOnInit() {
    console.log(sessionStorage.getItem('_id'))
    this.commonApi.get_request(" http://34.121.49.132/user_job_history?email_id="+sessionStorage.getItem('_id')).subscribe(res =>
    {
      console.log(res.json())
      if(res.status==200)
      {
      var data=res.json();
    
      if(data.past_jobs.length>0)
      {
        let length=data.past_jobs.length
        this.valuedata=data.past_jobs[length-1]
        this.form.value.company_name=data.past_jobs[length-1].company_name;
        this.form.value.title=data.past_jobs[length-1].title;
        this.form.value.start_date=data.past_jobs[length-1].start_date;
        this.form.value.location=data.past_jobs[length-1].location;
        this.form.value.description=data.past_jobs[length-1].description;
        console.log("company name :::"+data.past_jobs[length-1].company_name)
      }
      alert('Profile Got Sucessfully');
      }
      else if(res.status==400)
      {
        alert('User Does Not Exists');
      }
    }
    ,
    error => {
      console.log("data error", error);
      var msg=JSON.parse(error._body)
        alert(msg.message)
    })
  }
  onSubmit() {
  console.log(this.form.value)
    alert(JSON.stringify(this.form.value));
    
    this.commonApi.post_request(" http://34.121.49.132/user_job_history",this.form.value).subscribe(res =>
    {
      console.log(res.json())
      if(res.status==200)
      {
      var data=res.json();
     
      alert('Profile Updated Sucessfully');
      }
      else if(res.status==400)
      {
        alert('User Does Not Exists');
      }
   
  } ,
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
