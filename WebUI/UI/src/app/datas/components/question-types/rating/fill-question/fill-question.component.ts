import { Component, OnInit } from '@angular/core';
import { Question } from '@datas/models/base/question';
import { RatingQuestion } from '@datas/models/question-types/rating-question';
import { RatingQuestionService } from '@datas/services/question-types/rating/rating-question.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { SubmitService } from '@datas/services/submit/submit.service';

@Component({
  selector: 'app-fill-rating-question',
  templateUrl: './fill-question.component.html',
  styleUrls: ['./fill-question.component.scss'],
})
export class FillQuestionComponent implements OnInit {
  formGroup: FormGroup;
  filledQuestion: Question;
  filledQuestionSettings: RatingQuestion;
  response: any;
  responses: any = [];

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
    if (this.filledQuestionSettings.isRequired) {
      this.formGroup = new FormGroup({
        rate: new FormControl(this.response.value, Validators.required),
      });
    } else {
      this.formGroup = new FormGroup({
        rate: new FormControl(this.response.value),
      });
    }
  }

  setRate(rate) {
    let value = this.filledQuestionSettings.rate - rate.target.value + 1;
    this.setResponse(value.toString());
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
        this.response.value = (
          this.filledQuestionSettings.rate -
          Number(this.response.value) +
          1
        ).toString();
        return this.response;
      }
    }

    this.response = null;
    return this.response;
  }

  isRequired() {
    return this.localStorageService.getFilledQuestionSettings().isRequired;
  }

  getRatingLength() {
    return this.localStorageService.getFilledQuestionSettings().rate;
  }

  reset() {
    this.response.value = null;
    this.ngOnInit();
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
