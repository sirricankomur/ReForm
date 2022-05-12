import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    
  }

  signOut(){
    localStorage.clear();
    this.router.navigate(['login']);
  }

  getUser(){
    return this.localStorageService.getUser();
  }
}
