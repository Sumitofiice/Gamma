import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef, MatBottomSheet } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonApis } from 'src/app/commonClass/commonApi';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  profileForm = new FormGroup({
    courseName: new FormControl(''),
    tags: new FormControl([]),
    description: new FormControl(''),
    coursePrice: new FormControl(''),
  });
  items:'tags'
  constructor(private _bottomSheetRef: MatBottomSheetRef<PopupComponent>,private _bottomSheet: MatBottomSheet,public commonApi:CommonApis) {}

  //   openLink(event: MouseEvent): void {
  //     this._bottomSheetRef.dismiss();
  //     event.preventDefault();
  //   }

  ngOnInit() {
    console.log(sessionStorage.getItem('_id'))
  }
  onSubmit() {
    console.warn(this.profileForm.value);
    this.profileForm.value['_id']=sessionStorage.getItem('_id');
    console.warn(this.profileForm.value);
    this.commonApi.post_request("https://api.akademe.co/rest/private/interview/v1/course/create",this.profileForm.value).subscribe(res =>
    {
      console.log(res.json())
      var data=res.json();
      if(data.status==201)
      {
        alert('Course Created Sucessfully');
        this._bottomSheet.dismiss()
      }
      
    }
    ,
    error => {
      console.log("data error", error);
      var msg=JSON.parse(error._body)
        alert(msg.message)
    })

   
  }
  close()
  {
    this._bottomSheet.dismiss()
  }

}
