import { Component, OnInit } from '@angular/core';
import { RatingQuestion } from '@datas/models/question-types/rating-question';
import { RatingQuestionService } from '@datas/services/question-types/rating/rating-question.service';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-rating-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
})
export class RightSidebarComponent implements OnInit {
  private editedQuestionSettings: RatingQuestion;
  private rate: number;

  constructor(
    private ratingQuestionService: RatingQuestionService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {}

  getRate() {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();
    this.rate = this.editedQuestionSettings.rate;

    return this.rate;
  }

  setRate(rate) {
    this.rate = Number(rate);
    this.editedQuestionSettings.rate = Number(rate);
    this.localStorageService.setEditedQuestionSettings(
      this.editedQuestionSettings
    );
    this.update(this.editedQuestionSettings);
  }

  private update(editedQuestionSettings) {
    this.ratingQuestionService.update(editedQuestionSettings).subscribe();
  }
}
