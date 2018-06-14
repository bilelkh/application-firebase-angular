import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Params } from '@angular/router';
import {AuthentificationService} from "../../services/authentification.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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


  loginGoogle() {
    this.auth.googleLogin();
  }


  loginAnonymous(){
    this.auth.login(this.loginForm.value.email,this.loginForm.value.password);
  }



  logout(){
    this.auth.logout();
  }
  ngOnInit() {
  }

}
