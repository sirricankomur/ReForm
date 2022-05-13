import { Component, OnInit } from '@angular/core';
import { Question } from '@datas/models/base/question';
import { Response } from '@datas/models/base/response';
import { FormService } from '@datas/services/base/form/form.service';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { ResponseCrudService } from '@shared/services/response-crud/response-crud.service';
import { QuestionTypesValidationService } from '@shared/services/validations/question-types-validation/question-types-validation.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  question: Question;
  questions: Question[];
  response: Response;
  responses: Response[];
  dataLoaded: boolean = false;
  public formResponses;
  constructor(
    private localStorageService: LocalStorageService,
    private responseCrudService: ResponseCrudService,
    private formService: FormService,
    public questionTypesValidationService: QuestionTypesValidationService
  ) {
    this.formResponses = new Array();

    this.questions = this.localStorageService.getEditedForm().questions;
    this.responses = this.localStorageService.getEditedForm().responses;
    for (let i = 0; i < this.questions.length; i++) {
      this.question = this.questions[i];
      for (let j = 0; j < this.responses.length; j++) {
        this.response = this.responses[j];
        if (this.response.questionId == this.question.id) {
          this.responseCrudService.getResponseById(
            this.response,
            this.formResponses,
            this.question
          );
        }
      }
    }
  }

  ngOnInit(): void {
    
    // if (this.localStorageService.getEditedForm().responses) {
    //   this.dataLoaded = this.formResponses.length ==
    //   this.localStorageService.getEditedForm().responses.length;
      
    // } else {
    //   this.formService
    //     .getById(this.localStorageService.getEditedForm().id)
    //     .subscribe((responseDb) => {
    //       this.localStorageService.setEditedForm(responseDb.data);
    //       this.dataLoaded = this.formResponses.length ==
    //   this.localStorageService.getEditedForm().responses.length;
    //     });
    // }

  }

  getQuestions() {
    return this.localStorageService.getEditedForm().questions;
  }

  getFormUsers() {
    return this.localStorageService.getEditedForm().formUsers;
  }

  isDataLoaded() {
   
    return this.formResponses.length == this.localStorageService.getEditedForm().responses.length;
  }

  getResponses(userId: number) {
    let newArray = new Array();
    let isThere = false;
    for (let i = 0; i < this.questions.length; i++) {
      for (let j = 0; j < this.formResponses.length; j++) {
        if (
          this.questions[i].questionOrder ==
          this.formResponses[j].question.questionOrder
        ) {
          if (this.formResponses[j].userId == userId) {
            newArray.push(this.formResponses[j]);
            isThere = true;
          }
        }
      }

      if (!isThere) {
        let newResponse = {
          responseId: 0,
          question: null,
          userId: userId,
          value: null,
        };
        newArray.push(newResponse);
      }
      isThere = false;
    }

    return newArray;
  }
}
