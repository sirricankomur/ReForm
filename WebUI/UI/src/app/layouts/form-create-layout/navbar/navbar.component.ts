import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from "@datas/models/base/form";
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-form-create-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  form: Form;
  public shareLink;
    
  constructor(private router:Router, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.form = this.localStorageService.getEditedForm();
    this.shareLink = this.getShareLink();
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

  getUser(){
    return this.localStorageService.getUser();
  }

  isAdmin(){
    return this.getUser().email == 'admin@reform.com'
  }

  getShareLink(){
    let domain = window.location.href.split('/', 5);
    let currentUrl = '';
    for (let i = 0; i < domain.length; i++) {
      currentUrl = currentUrl + domain[i] + '/';   
    }

    return currentUrl + 'fill';
  }
}
