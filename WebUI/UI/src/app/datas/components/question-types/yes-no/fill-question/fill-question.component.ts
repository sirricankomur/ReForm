import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from '@datas/models/base/question';
import { YesNoQuestion } from '@datas/models/question-types/yes-no-question';
import { SubmitService } from '@datas/services/submit/submit.service';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { QuestionSettingsService } from '@shared/services/question-settings/question-settings.service';
import { ResponseCrudService } from '@shared/services/response-crud/response-crud.service';

@Component({
  selector: 'app-fill-yes-no-question',
  templateUrl: './fill-question.component.html',
  styleUrls: ['./fill-question.component.scss'],
})
export class FillQuestionComponent implements OnInit {
  formGroup: FormGroup;
  filledQuestion: Question;
  filledQuestionSettings: YesNoQuestion;
  response: any;
  responses: any = [];

  constructor(
    private questionSettingsService: QuestionSettingsService,
    private responseCrudService: ResponseCrudService,
    private router: Router,
    private submitService: SubmitService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.responses = this.localStorageService.getResponses();
    this.filledQuestion = this.localStorageService.getFilledQuestion();
    this.filledQuestionSettings =
      this.localStorageService.getFilledQuestionSettings();
    this.response = this.getResponse();

    if (this.response) {
      this.createFormToFill();
      this.setResponse(this.response.value);
    } else {
      this.setResponse(null);
      this.createFormToFill();
    }
  }

  createFormToFill() {
    if (this.filledQuestionSettings.isRequired) {
      this.formGroup = new FormGroup({
        yesNo: new FormControl(this.response.value, Validators.required),
      });
    } else {
      this.formGroup = new FormGroup({
        yesNo: new FormControl(this.response.value),
      });
    }
  }

  reset() {
    this.response.value = null;
    this.setResponse(this.response.value);
    this.ngOnInit();
  }

  setYesNo(yesNo) {
    this.setResponse(yesNo.target.value);
  }

  setResponse(value) {
    let isComplete = false;
    let isThere = false;
    if (value) {
      if (this.formGroup.valid) {
        isComplete = true;
      }
    } else {
      if (!this.filledQuestionSettings.isRequired) {
        isComplete = true;
      }
    }

    for (let i = 0; i < this.responses.length; i++) {
      if (this.filledQuestion.id == this.responses[i].question.id) {
        this.responses[i].value = value;
        this.responses[i].isComplete = isComplete;
        isThere = true;
        break;
      }
    }
    if (!isThere) {
      this.response = {
        question: this.filledQuestion,
        questionSettings: this.filledQuestionSettings,
        value: value,
        isComplete: isComplete,
      };
      this.responses.push(this.response);
    }

    this.localStorageService.setResponses(this.responses);
  }

  getResponse() {
    for (let i = 0; i < this.responses.length; i++) {
      if (this.filledQuestion.id == this.responses[i].question.id) {
        this.response = this.responses[i];
        return this.response;
      }
    }

    this.response = null;
    return this.response;
  }

  isRequired() {
    return this.localStorageService.getFilledQuestionSettings().isRequired;
  }

  isSameQuestion() {
    if (
      this.filledQuestionSettings.questionId !=
      this.localStorageService.getFilledQuestionSettings().questionId
    ) {
      this.ngOnInit();
    }

    return true;
  }

  isLastQuestion() {
    return (
      this.filledQuestion.questionOrder ==
      this.localStorageService.getFilledForm().questions.length
    );
  }

  submit() {
   this.submitService.submitResponse(this.responses)
  }
}
