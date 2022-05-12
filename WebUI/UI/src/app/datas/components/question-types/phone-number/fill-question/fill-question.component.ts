import { Component, OnInit } from '@angular/core';
import { Question } from '@datas/models/base/question';
import { PhoneNumberQuestion } from '@datas/models/question-types/phone-number-question';
import { PhoneNumberQuestionService } from '@datas/services/question-types/phone-number/phone-number-question.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { SubmitService } from '@datas/services/submit/submit.service';

@Component({
  selector: 'app-fill-phone-number-question',
  templateUrl: './fill-question.component.html',
  styleUrls: ['./fill-question.component.scss'],
})
export class FillQuestionComponent implements OnInit {
  formGroup: FormGroup;
  filledQuestion: Question;
  filledQuestionSettings: PhoneNumberQuestion;
  response: any;
  responses: any = [];

  phoneNumber: any = '';

  constructor(
    private localStorageService: LocalStorageService,
    private submitService: SubmitService
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
    let regex = '[0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}';
    if (this.filledQuestionSettings.isRequired) {
      this.formGroup = new FormGroup({
        phoneNumber: new FormControl(this.response.value, [
          Validators.pattern(regex),
          Validators.required,
        ]),
      });
    } else {
      this.formGroup = new FormGroup({
        phoneNumber: new FormControl(this.response.value, [
          Validators.pattern(regex),
          Validators.minLength(13),
          Validators.maxLength(13),
        ]),
      });
    }
  }

  setPhoneNumber(phoneNumber) {
    this.phoneNumber = phoneNumber.target.value;
    this.phoneNumber = this.phoneNumber.replace(/ /g, '');
    let areaCode = this.phoneNumber.substr(0, 3);
    let subscriberNumber_1 = this.phoneNumber.substr(3, 3);
    let subscriberNumber_2 = this.phoneNumber.substr(6, 2);
    let subscriberNumber_3 = this.phoneNumber.substr(8, 2);

    this.phoneNumber =
      areaCode +
      ' ' +
      subscriberNumber_1 +
      ' ' +
      subscriberNumber_2 +
      ' ' +
      subscriberNumber_3;
    this.setResponse(this.phoneNumber);
    this.ngOnInit();
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
    this.submitService.submitResponse(this.responses);
  }
}
