import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-fill-submit',
  templateUrl: './fill-submit.component.html',
  styleUrls: ['./fill-submit.component.scss']
})
export class FillSubmitComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
  }

  isSubmit(){
    return this.localStorageService.getFormAction() == 'submit';
  }
}
