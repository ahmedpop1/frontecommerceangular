import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
userRegfrm:FormGroup;
  constructor(private fb:FormBuilder) {
    this.userRegfrm=fb.group({
      fullname:['',Validators.required],
      phonenumber:['',Validators.required],
      address:fb.group({governorat:[''],city:[''],street:['']}),
      username:['',Validators.required],
      password:['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

}
