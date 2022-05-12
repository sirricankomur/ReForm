import { Component, OnInit } from '@angular/core';
import { NumberQuestion } from '@datas/models/question-types/number-question';
import { NumberQuestionService } from '@datas/services/question-types/number/number-question.service';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-number-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
})
export class RightSidebarComponent implements OnInit {
  private editedQuestionSettings: NumberQuestion;
  isMinNumber: boolean;
  isMaxNumber: boolean;

  constructor(
    private numberQuestionService: NumberQuestionService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {}

  getIsMinNumber() {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();
    this.isMinNumber = this.editedQuestionSettings.isMinNumber;

    return this.isMinNumber;
  }

  setIsMinNumber(value: boolean) {
    this.isMinNumber = value;
    this.editedQuestionSettings.isMinNumber = this.isMinNumber;
    this.localStorageService.setEditedQuestionSettings(
      this.editedQuestionSettings
    );

    this.update(this.editedQuestionSettings);
  }

  getMinNumber() {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();
    return this.editedQuestionSettings.minNumber;
  }

  setMinNumber(minNumber) {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();

    this.editedQuestionSettings.minNumber = Number(minNumber.target.value);
    this.localStorageService.setEditedQuestionSettings(
      this.editedQuestionSettings
    );
    this.update(this.editedQuestionSettings);
  }

  setIsMaxNumber(value: boolean) {
    this.isMaxNumber = value;
    this.editedQuestionSettings.isMaxNumber = this.isMaxNumber;
    this.localStorageService.setEditedQuestionSettings(
      this.editedQuestionSettings
    );

    this.update(this.editedQuestionSettings);
  }

  getIsMaxNumber() {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();
    this.isMaxNumber = this.editedQuestionSettings.isMaxNumber;

    return this.isMaxNumber;
  }

  getMaxNumber() {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();
    return this.editedQuestionSettings.maxNumber;
  }

  setMaxNumber(maxNumber) {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();
    this.editedQuestionSettings.maxNumber = Number(maxNumber.target.value);
    this.localStorageService.setEditedQuestionSettings(
      this.editedQuestionSettings
    );
    this.update(this.editedQuestionSettings);
  }

  private update(editedQuestionSettings) {
    this.numberQuestionService.update(editedQuestionSettings).subscribe();
  }
}
