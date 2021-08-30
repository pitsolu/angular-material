import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any = null;

  login = {username:null, password:null}

  constructor(private router:Router, 
              private fb: FormBuilder,
              private authServ: AuthService) { 

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

  // convenience getter for easy access to form fields
   get f() { return this.loginForm.controls; }

  onSubmit(){

  	this.router.navigate(["/app/contacts"])

  	// if(this.loginForm.valid){

  	// 	console.log(this.loginForm.value)
   //    console.log(this.login)
  	// }

    // this.authServ.login(this.f.username.value, this.f.username.value)
    //   .pipe(first())
    //   .subscribe(data => {

    //     console.log("data")
    //   },
    //   error => {

    //     console.log("error")
    //   })
  }
}
