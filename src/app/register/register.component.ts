import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup=new FormGroup({
    first_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    last_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][0-9]{3,10}$')]),
    age:new FormControl(null,[Validators.required,Validators.min(16),Validators.max(100)]),
  })
  err:string='';

  constructor(private _AuthService:AuthService, private _Router:Router) { }

  ngOnInit(): void {
  }

  registerFormSubmit(formData:FormGroup){
    console.log(formData.value);
    this._AuthService.register(formData.value).subscribe((res)=>{
      console.log(res);
      if (res.message == 'success') {
        this._Router.navigate(['login'])
      }
      else {
        this.err = res.errors.email.message
      }
      
    },(err)=>{

    },()=>{

      formData.reset();
    })
  }
    

}
