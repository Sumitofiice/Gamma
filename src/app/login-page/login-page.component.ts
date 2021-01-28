import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthServiceService } from '../services/auth-service.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  validEmail:boolean = false
  constructor( public router: Router, private service : AuthServiceService) { }

  ngOnInit() {
  }
  onChange(newValue) {
    const validEmailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (validEmailRegEx.test(newValue)) {
        this.validEmail = true;
    }else {
      this.validEmail = false;
    }

  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    // if(this.profileForm.value.firstName=='abc' && this.profileForm.value.lastName=='abc'  )
    // {
    //  this.router.navigateByUrl('table')
    // }
    if(this.validEmail){
    this.service.checkusernameandpassword(this.profileForm.value.firstName, this.profileForm.value.lastName).subscribe( 
      res => {console.log(res); 
        if(res == true)
        {
          console.log("Login true")
          this.router.navigateByUrl('ProfileUpdate')
        }
        else{
    // this.msg ='Invalid username or password';
      alert('error')
        }
      }
    );
    }
    else{
      alert("please enter correct email format")
    }
    // var output =  true
    // this.service.checkusernameandpassword(this.profileForm.value.firstName, this.profileForm.value.lastName);
    // console.log(output)
//     if(output == true)
//     {
//       alert('login')
//       this.router.navigateByUrl('table')
//     }
//     else{
// // this.msg ='Invalid username or password';
// // alert('error')
//     }
  }
  routeClick(val)
  {
    // alert()
    this.router.navigateByUrl('profile');
  }
}
