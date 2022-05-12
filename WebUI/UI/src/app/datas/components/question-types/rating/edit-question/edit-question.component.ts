import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-edit-rating-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss'],
})
export class EditQuestionComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {}

  getRate() {
    return this.localStorageService.getEditedQuestionSettings().rate;
  }
}
