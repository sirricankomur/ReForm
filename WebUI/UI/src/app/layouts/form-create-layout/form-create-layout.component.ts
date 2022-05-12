import { Component, OnInit } from '@angular/core';
import { Form } from '@datas/models/base/form';
import { Question } from '@datas/models/base/question';
import { UserForm } from '@datas/models/intermediate/user-form';
import { UserFormService } from '@datas/services/intermediate/user-form/user-form.service';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { QuestionTypesValidationService } from '@shared/services/validations/question-types-validation/question-types-validation.service';

@Component({
  selector: 'app-form-create-layout',
  templateUrl: './form-create-layout.component.html',
  styleUrls: ['./form-create-layout.component.scss'],
})
export class FormCreateLayoutComponent implements OnInit {
  form: Form;
  editedQuestion: Question;

  constructor(
    private userFormService: UserFormService,
    private localStorageService: LocalStorageService,
    public questionTypesValidationService: QuestionTypesValidationService
  ) {}

  ngOnInit(): void {
    if (this.localStorageService.getFormAction() == 'create') {
      this.create();
    } else if (this.localStorageService.getFormAction() == 'edit') {
      if (!this.getQuestions()) {
        window.location.reload();
      }
      this.setEditedQuestion(this.editedQuestion);
    }
  }

  create() {
    let userId = Number(this.localStorageService.getUser().id);
    let formId = Number(this.localStorageService.getEditedForm().id);
    let userForm = new UserForm(userId, formId);

    this.userFormService.create(userForm).subscribe();
  }

  getEditedQuestion() {
    return this.localStorageService.getEditedQuestion();
  }

  setEditedQuestion(editedQuestion: Question) {
    if (this.getQuestions().length != 0) {
      editedQuestion = this.getQuestions()[0];
    } else {
      editedQuestion = new Question(0, 0, '', '', 0);
    }

    this.localStorageService.setEditedQuestion(editedQuestion);
  }

  getQuestions() {
    return this.localStorageService.getEditedForm().questions;
  }
}
