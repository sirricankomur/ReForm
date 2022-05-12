import { Component, OnInit } from '@angular/core';
import { Question } from '@datas/models/base/question';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { QuestionTypesValidationService } from '@shared/services/validations/question-types-validation/question-types-validation.service';

@Component({
  selector: 'app-form-create-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
})
export class RightSidebarComponent implements OnInit {
  editedQuestion: Question;
  prevQuestion: Question;
  constructor(
    private localStorageService: LocalStorageService,
    public questionTypesValidationService: QuestionTypesValidationService
  ) {}

  ngOnInit(): void {
    this.editedQuestion = this.getEditedQuestion();
  }

  getEditedQuestion() {
    return this.localStorageService.getEditedQuestion();
  }

  getQuestions(){
    return this.localStorageService.getEditedForm().questions;
  }
}
