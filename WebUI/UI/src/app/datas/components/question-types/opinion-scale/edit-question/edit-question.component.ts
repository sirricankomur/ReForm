import { Component, OnInit } from '@angular/core';
import { Question } from '@datas/models/base/question';
import { OpinionScaleQuestionService } from '@datas/services/question-types/opinion-scale/opinion-scale-question.service';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-edit-opinion-scale-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss'],
})
export class EditQuestionComponent implements OnInit {
  private editedQuestion: Question;

  constructor(
    private opinionScaleQuestionService: OpinionScaleQuestionService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.editedQuestion = this.localStorageService.getEditedQuestion();
    this.setEditedQuestionSettings(this.editedQuestion);
  }

  setEditedQuestionSettings(question: Question) {
    this.opinionScaleQuestionService
      .getById(question.id)
      .subscribe((response) => {
        this.localStorageService.setEditedQuestionSettings(response.data);
      });
  }

  getMinScale() {
    return this.localStorageService.getEditedQuestionSettings().minScale;
  }

  getMaxScale() {
    return this.localStorageService.getEditedQuestionSettings().maxScale;
  }

  getBeginningLabel() {
    return this.localStorageService.getEditedQuestionSettings()
      .labelBeginningText;
  }

  getMiddleLabel() {
    return this.localStorageService.getEditedQuestionSettings().labelMiddleText;
  }

  getEndLabel() {
    return this.localStorageService.getEditedQuestionSettings().labelEndText;
  }
}
