import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Question } from '@datas/models/base/question';
import { WebsiteQuestion } from '@datas/models/question-types/website-question';
import { WebsiteQuestionService } from '@datas/services/question-types/website/website-question.service';
import { SubmitService } from '@datas/services/submit/submit.service';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-fill-website-question',
  templateUrl: './fill-question.component.html',
  styleUrls: ['./fill-question.component.scss'],
})
export class FillQuestionComponent implements OnInit {
  filledQuestion: Question;
  filledQuestionSettings: WebsiteQuestion;
  response: any;
  responses: any = [];

  constructor(private localStorageService: LocalStorageService, private submitService: SubmitService) {}

  ngOnInit(): void {
    this.responses = this.localStorageService.getResponses();
    this.filledQuestion = this.localStorageService.getFilledQuestion();
    this.filledQuestionSettings =
      this.localStorageService.getFilledQuestionSettings();

    this.response = this.getResponse();

    if (this.response) {
      this.setResponse(this.response.value);
    } else {
      this.setResponse(null);
    }
  }

  isValid() {
    let regExp = new RegExp(
      /(https?:\/\/)?(www\.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)|(https?:\/\/)?(www\.)?(?!ww)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );

    if (this.filledQuestionSettings.isRequired) {
      return regExp.test(this.response.value);
    } else {
      return regExp.test(this.response.value) || this.response.value == null;
    }
  }

  setWebsite(website) {
    this.setResponse(website.target.value);
  }

  setResponse(value) {
    let isComplete = false;
    let isThere = false;

    if (value) {
      if (this.isValid()) {
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
