import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Params } from '@angular/router';
import {AuthentificationService} from "../../services/authentification.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth :AuthentificationService
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }


  ngOnInit() {
  }
  signUpWithEmail(){
     this.auth.emailSignup(this.loginForm.value.email,this.loginForm.value.password);
    }
}
