import { Component, OnInit } from '@angular/core';
import { TextQuestion } from '@datas/models/question-types/text-question';
import { TextQuestionService } from '@datas/services/question-types/text/text-question.service';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-text-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
})
export class RightSidebarComponent implements OnInit {
  private editedQuestionSettings: TextQuestion;
  isMaxCharacters: boolean;

  constructor(
    private textQuestionService: TextQuestionService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {}

  getIsMaxCharacters() {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();
    this.isMaxCharacters = this.editedQuestionSettings.isMaxCharacters;
    return this.isMaxCharacters;
  }

  setIsMaxCharacters(value: boolean) {
    this.editedQuestionSettings.isMaxCharacters = value;
    this.localStorageService.setEditedQuestionSettings(
      this.editedQuestionSettings
    );
    this.update(this.editedQuestionSettings);
  }

  getMaxCharacters() {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();
    return this.editedQuestionSettings.maxCharacters;
  }

  setMaxCharacters(maxNumber) {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();
    this.editedQuestionSettings.maxCharacters = Number(maxNumber.target.value);
    this.localStorageService.setEditedQuestionSettings(
      this.editedQuestionSettings
    );
    this.update(this.editedQuestionSettings);
  }

  private update(editedQuestionSettings) {
    this.textQuestionService.update(editedQuestionSettings).subscribe();
  }
}
