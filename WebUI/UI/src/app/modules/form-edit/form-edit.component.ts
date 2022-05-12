import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form } from '@datas/models/base/form';
import { Question } from '@datas/models/base/question';
import { FormService } from '@datas/services/base/form/form.service';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { QuestionSettingsService } from '@shared/services/question-settings/question-settings.service';
import { QuestionSortService } from '@shared/services/question-sort/question-sort.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss'],
})
export class FormEditComponent implements OnInit {
  editedForm: FormGroup;
  form: Form;
  formName: string;
  editedQuestion: Question;

  constructor(
    private formService: FormService,
    private questionSortService: QuestionSortService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private localStorageService: LocalStorageService,
    private questionSettingsService: QuestionSettingsService
  ) {}

  ngOnInit(): void {
    this.formName = this.localStorageService.getEditedForm().name;
    this.editForm();
  }

  editForm() {
    this.editedForm = this.formBuilder.group({
      name: [this.formName, Validators.required],
    });
  }

  rename() {
    if (this.editedForm.valid) {
      this.form = this.localStorageService.getEditedForm();
      this.form.name = this.editedForm.value.name;
      this.formService.update(this.form).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Success');
          this.localStorageService.setFormAction('edit');
          this.goToForm(this.form);
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Validation Error'
              );
            }
          }
        }
      );
    }
  }

  goToForm(form: Form) {
    let questions = this.questionSortService.sort(form.questions);
    form.questions = questions;
    this.localStorageService.setEditedForm(form);
    this.setEditedQuestion(this.editedQuestion);
    this.editedQuestion = this.localStorageService.getEditedQuestion();
    this.localStorageService.setFormAction('edit');
    let urlToNavigate = 'form/' + form.id + '/create';
    this.questionSettingsService.setNavigate(urlToNavigate, form);
    this.questionSettingsService.setQuestionSettings(this.editedQuestion, this.localStorageService.setEditedQuestionSettings);
  }

  getEditedQuestion() {
    return this.localStorageService.getEditedQuestion();
  }

  setEditedQuestion(editedQuestion: Question) {
    if (this.getFormQuestions().length != 0) {
      editedQuestion = this.getFormQuestions()[0];
    } else {
      editedQuestion = new Question(0, 0, '', '', 0);
    }

    this.localStorageService.setEditedQuestion(editedQuestion);
  }

  getFormQuestions() {
    return this.localStorageService.getEditedForm().questions;
  }
}
