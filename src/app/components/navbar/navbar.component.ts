import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../../services/authentification.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  errorMessage: string = '';

  constructor(private auth :AuthentificationService) {}
  ngOnInit() {
  }


  logout(){
    this.auth.logout();
  }
  
}
