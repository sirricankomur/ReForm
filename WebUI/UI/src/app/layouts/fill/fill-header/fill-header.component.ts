import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-fill-header',
  templateUrl: './fill-header.component.html',
  styleUrls: ['./fill-header.component.scss'],
})
export class FillHeaderComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {}

  getFilledQuestion() {
    return this.localStorageService.getFilledQuestion();
  }

  isRequired() {
    return this.localStorageService.getFilledQuestionSettings().isRequired;
  }
}
