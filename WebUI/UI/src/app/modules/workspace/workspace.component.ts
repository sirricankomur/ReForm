import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from '@datas/models/base/form';
import { Question } from '@datas/models/base/question';
import { UserDto } from '@datas/models/dto/user-dto';
import { UserForm } from '@datas/models/intermediate/user-form';
import { FormService } from '@datas/services/base/form/form.service';
import { UserFormService } from '@datas/services/intermediate/user-form/user-form.service';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { QuestionSettingsService } from '@shared/services/question-settings/question-settings.service';
import { QuestionSortService } from '@shared/services/question-sort/question-sort.service';
import { QuestionTypesValidationService } from '@shared/services/validations/question-types-validation/question-types-validation.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent implements OnInit {
  public forms: Form[];
  public dataLoaded = false;
  public filterText = '';
  private user: UserDto;
  private editedQuestion: Question;

  constructor(
    private formService: FormService,
    private questionSortService: QuestionSortService,
    private toastrService: ToastrService,
    private router: Router,
    private userFormService: UserFormService,
    private localStorageService: LocalStorageService,
    private questionSettingsService: QuestionSettingsService,
    public questionTypesValidationService: QuestionTypesValidationService
  ) {}

  ngOnInit(): void {
    // if (!this.localStorageService.getUser()) {
    //   if (this.localStorageService.getReload()) {
    //     if (this.localStorageService.getReload() == '1') {
    //       localStorage.clear();
    //       this.toastrService.error('Try again.', 'Login failed!');
    //       this.router.navigate(['login']);
    //     }
    //   } else {
    //     this.localStorageService.setReload('1');
    //     window.location.reload();
    //   }
    // } else {
    //   localStorage.removeItem('reload');
    //   this.user = this.localStorageService.getUser();
    //   this.setForms(this.user);
    // }

    this.user = this.localStorageService.getUser();
    this.setForms(this.user);
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
    this.questionSettingsService.setQuestionSettings(
      this.editedQuestion,
      this.localStorageService.setEditedQuestionSettings
    );
  }

  create() {
    let userId = Number(this.localStorageService.getUser().id);
    let formId = Number(this.localStorageService.getEditedForm().id);
    let userForm = new UserForm(userId, formId);

    this.userFormService.create(userForm).subscribe();
  }

  delete(form: Form) {
    this.formService.delete(form).subscribe((response) => {
      this.toastrService.success(response.message);
      this.setForms(this.user);
    });
  }

  rename(form: Form) {
    let questions = this.questionSortService.sort(form.questions);
    form.questions = questions;
    this.localStorageService.setEditedForm(form);
    this.router.navigate(['workspace/' + form.id + '/edit']);
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

  getForms() {
    return this.localStorageService.getForms();
  }

  setForms(user: UserDto) {
    this.formService.getForms(user.id).subscribe((response) => {
      this.forms = response.data;
      this.localStorageService.setForms(this.forms);
      this.dataLoaded = true;
    });
  }
}
