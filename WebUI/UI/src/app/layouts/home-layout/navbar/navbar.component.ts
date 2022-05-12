import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

   
  constructor(private router:Router, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    
  }

  getUserName(){
    let firstName = this.getUser().firstName;
    let lastName = this.getUser().lastName;
    return firstName + " " + lastName;
  }

  signOut(){
    localStorage.clear();
    this.router.navigate(['login']);
  }

  isLogin(){
    return this.localStorageService.getToken();
  }

  getUser(){
    return this.localStorageService.getUser();
  }

  isAdmin(){
    return this.getUser().email == 'admin@reform.com'
  }

}
