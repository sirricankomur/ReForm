import { Component, OnInit } from '@angular/core';
import { OpinionScaleQuestion } from '@datas/models/question-types/opinion-scale-question';
import { OpinionScaleQuestionService } from '@datas/services/question-types/opinion-scale/opinion-scale-question.service';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-opinion-scale-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
})
export class RightSidebarComponent implements OnInit {
  private editedQuestionSettings: OpinionScaleQuestion;
  private minScale;
  private maxScale;

  constructor(
    private opinionScaleQuestionService: OpinionScaleQuestionService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {}

  getBeginningLabel() {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();
    return this.editedQuestionSettings.labelBeginningText;
  }

  setBeginningLabel(text) {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();

    this.editedQuestionSettings.labelBeginningText = text.target.value;
    this.localStorageService.setEditedQuestionSettings(
      this.editedQuestionSettings
    );
    this.update(this.editedQuestionSettings);
  }

  getMiddleLabel() {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();
    return this.editedQuestionSettings.labelMiddleText;
  }

  setMiddleLabel(text) {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();

    this.editedQuestionSettings.labelMiddleText = text.target.value;
    this.localStorageService.setEditedQuestionSettings(
      this.editedQuestionSettings
    );
    this.update(this.editedQuestionSettings);
  }

  getEndLabel() {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();
    return this.editedQuestionSettings.labelEndText;
  }

  setEndLabel(text) {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();

    this.editedQuestionSettings.labelEndText = text.target.value;
    this.localStorageService.setEditedQuestionSettings(
      this.editedQuestionSettings
    );
    this.update(this.editedQuestionSettings);
  }

  getMinScale() {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();
    this.minScale = this.editedQuestionSettings.minScale;

    return this.minScale;
  }

  setMinScale(minScale) {
    this.minScale = Number(minScale);
    this.editedQuestionSettings.minScale = Number(minScale);
    this.localStorageService.setEditedQuestionSettings(
      this.editedQuestionSettings
    );
    this.update(this.editedQuestionSettings);
  }

  getMaxScale() {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();
    this.maxScale = this.editedQuestionSettings.maxScale;

    return this.maxScale;
  }

  setMaxScale(maxScale) {
    this.maxScale = Number(maxScale);
    this.editedQuestionSettings.maxScale = Number(maxScale);
    this.localStorageService.setEditedQuestionSettings(
      this.editedQuestionSettings
    );
    this.update(this.editedQuestionSettings);
  }

  private update(editedQuestionSettings) {
    this.opinionScaleQuestionService.update(editedQuestionSettings).subscribe();
  }
}
