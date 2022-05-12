import { Component, OnInit } from '@angular/core';
import { Question } from '@datas/models/base/question';
import { TextQuestion } from '@datas/models/question-types/text-question';
import { TextQuestionService } from '@datas/services/question-types/text/text-question.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { SubmitService } from '@datas/services/submit/submit.service';

@Component({
  selector: 'app-fill-text-question',
  templateUrl: './fill-question.component.html',
  styleUrls: ['./fill-question.component.scss'],
})
export class FillQuestionComponent implements OnInit {
  formGroup: FormGroup;
  filledQuestion: Question;
  filledQuestionSettings: TextQuestion;
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
      if (this.filledQuestionSettings.isMaxCharacters) {
        this.formGroup = new FormGroup({
          text: new FormControl(this.response.value, [
            Validators.maxLength(this.getMaxCharacters()),
            Validators.required,
          ]),
        });
      } else {
        this.formGroup = new FormGroup({
          text: new FormControl(this.response.value, Validators.required),
        });
      }
    } else {
      if (this.filledQuestionSettings.isMaxCharacters) {
        this.formGroup = new FormGroup({
          text: new FormControl(this.response.value, [
            Validators.maxLength(this.getMaxCharacters()),
          ]),
        });
      } else {
        this.formGroup = new FormGroup({
          text: new FormControl(this.response.value),
        });
      }
    }
  }

  setText(text) {
    this.setResponse(text.target.value);
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

  getMaxCharacters() {
    return this.localStorageService.getFilledQuestionSettings().maxCharacters;
  }

  getIsMaxCharacters() {
    return this.localStorageService.getFilledQuestionSettings().isMaxCharacters;
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
