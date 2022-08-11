import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordmatch } from '../customvalidator/passwordmatch.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss',
]
})
export class RegisterComponent implements OnInit {
get fullname(){
  return this.userRegfrm.get('fullname');
}
get phonenumber(){
  return this.userRegfrm.get('phonenumber');
}
get username(){
  return this.userRegfrm.get('username');
}
get password(){
  return this.userRegfrm.get('password');
}
get confirmpassword(){
  return this.userRegfrm.get('confirmpassword');
}
get governorat(){

  return this.userRegfrm.get('address').get('governorat');
}
get city(){
  return this.userRegfrm.get('address').get('city');
}
get street(){
  return this.userRegfrm.get('address').get('street');
}
toggleFieldTextType() {
  this.fieldTextType = !this.fieldTextType;
}
submit(){console.log('submit')}
fieldTextType:boolean=false;
  userRegfrm:FormGroup;
  constructor(private fb:FormBuilder) {
    this.userRegfrm=fb.group({
      fullname:['',[Validators.required,Validators.pattern('^[ء-ي]{1,}( [ء-ي]{1,}){2,}$')]],
      phonenumber:['',[Validators.required,Validators.pattern('^01[0125][0-9]{8}$')]],
      address:fb.group({governorat:['',Validators.required],city:['',Validators.required],street:['',Validators.required]}),
      username:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]+@([a-zA-Z]+)\.(com|net|org)')]],
      password:['',[Validators.required,Validators.pattern('(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}')]],
      confirmpassword:['',[Validators.required]]
    },{validators:[passwordmatch]})
  }
  ngOnInit(): void {
  }

}
