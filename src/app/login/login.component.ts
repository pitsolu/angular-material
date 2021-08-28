import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any = null;

  login = {username:null, password:null}

  constructor(private router:Router, private fb: FormBuilder) { 

  	this.router = router;
    this.fb = fb;
    this.loginForm = null;
  }

  ngOnInit(): void {

    this.initForm()
    
  }

  initForm(): void {

    this.loginForm = this.fb.group({

      username: [this.login.username, [Validators.required, Validators.minLength(4)]],
      password: [this.login.password, Validators.required]
    });    
  }

  isValidInput(fieldName:string): boolean {

    return this.loginForm.controls[fieldName].invalid &&
      (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
  }

  onSubmit(){

  	// this.router.navigate(["/contacts"])

  	if(this.loginForm.valid){

  		console.log(this.loginForm.value)
      console.log(this.login)
  	}
  }
}
