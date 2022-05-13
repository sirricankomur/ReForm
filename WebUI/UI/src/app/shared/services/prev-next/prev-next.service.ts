import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from '@datas/models/base/form';
import { Question } from '@datas/models/base/question';
import { UserDto } from '@datas/models/dto/user-dto';
import { FormService } from '@datas/services/base/form/form.service';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { QuestionSettingsService } from '../question-settings/question-settings.service';
import { QuestionSortService } from '../question-sort/question-sort.service';

@Injectable({
  providedIn: 'root'
})
export class PrevNextService {
  form: Form;
  user: UserDto;
  filledQuestion: Question;
  prevQuestionSettings: any;
  nextQuestionSettings: any;
  filledQuestionSettings;

  
  questions: Question[];
  questionNumber;
  questionOrder;
  progressPercentage;
  questionSettings: any[];
  dataLoaded: boolean = false;
  public isCompleted: boolean = false;
  responses: any = [];
  requiredQuestions: any = [];
  
  constructor(private localStorageService: LocalStorageService, private questionSettingsService: QuestionSettingsService, private formService: FormService, private router: Router, private questionSortService: QuestionSortService) { 
    this.questionSettingsService.setAction('fill');
    let formId = this.getFormId();
    this.user = localStorageService.getUser();
    this.getForm(formId);
   // this.questionNumber = localStorageService.getFilledForm().questions.length;

  }

  prev() {
    this.filledQuestion = this.localStorageService.getFilledQuestion();
    this.questionOrder = this.filledQuestion.questionOrder;
    this.form = this.localStorageService.getFilledForm();
    if (this.questionOrder != 1) {
      let prevQuestion;
      this.filledQuestionSettings =
        this.localStorageService.getPrevQuestionSettings();
      this.filledQuestion = this.getQuestions()[this.questionOrder - 2];
      let nextQuestionSettings =
        this.localStorageService.getFilledQuestionSettings();

      this.questionOrder++;
      this.progressPercentage =
        (this.questionOrder * 100) / this.questionNumber;

      if (this.questionOrder >= 4) {
        prevQuestion = this.form.questions[this.questionOrder - 4];
        this.questionSettingsService.setQuestionSettings(
          prevQuestion,
          this.localStorageService.setPrevQuestionSettings
        );
      }

      this.localStorageService.setFilledQuestionSettings(
        this.filledQuestionSettings
      );
      this.localStorageService.setNextQuestionSettings(nextQuestionSettings);
    }
    this.localStorageService.setFilledQuestion(this.filledQuestion);
  }

  next() {
    this.filledQuestion = this.localStorageService.getFilledQuestion();
    this.questionOrder = this.filledQuestion.questionOrder;
    this.form = this.localStorageService.getFilledForm();

    if (this.questionOrder != this.questionNumber) {
      let prevQuestionSettings =
        this.localStorageService.getFilledQuestionSettings();
      this.filledQuestionSettings =
        this.localStorageService.getNextQuestionSettings();
      this.filledQuestion = this.getQuestions()[this.questionOrder];
      let nextQuestion;

      this.questionOrder++;
      this.progressPercentage =
        (this.questionOrder * 100) / this.questionNumber;
      this.localStorageService.setPrevQuestionSettings(prevQuestionSettings);
      this.localStorageService.setFilledQuestionSettings(
        this.filledQuestionSettings
      );

      if (this.questionOrder != this.questionNumber) {
        nextQuestion = this.form.questions[this.questionOrder];
        this.questionSettingsService.setQuestionSettings(
          nextQuestion,
          this.localStorageService.setNextQuestionSettings
        );
      }
    }
    console.log("filledQuestion: ", this.filledQuestion)
    this.localStorageService.setFilledQuestion(this.filledQuestion);
  }

  
  getQuestions() {
    return this.localStorageService.getFilledForm().questions;
  }

  getForm(formId) {
    this.formService.getById(formId).subscribe((response) => {
      let form = response.data;
      form.questions = this.questionSortService.sort(form.questions);
      this.questionNumber = form.questions.length;
      this.localStorageService.setFilledForm(form);
      this.filledQuestion = form.questions[0];

      this.setFilledQuestion(this.filledQuestion);
      this.questionSettingsService.setQuestionSettings(
        this.filledQuestion,
        this.localStorageService.setFilledQuestionSettings
      );

      if (this.getQuestions().length >= 1) {
        this.nextQuestionSettings = form.questions[1];

        this.questionSettingsService.setQuestionSettings(
          this.nextQuestionSettings,
          this.localStorageService.setNextQuestionSettings
        );
      }

      this.dataLoaded = true;
    });
  }
  
  setFilledQuestion(filledQuestion: Question) {
    if (this.getQuestions().length != 0) {
      filledQuestion = this.getQuestions()[0];
    } else {
      filledQuestion = new Question(0, 0, '', '', 0);
    }

    this.localStorageService.setFilledQuestion(filledQuestion);
  }

  
  getFormId() {
    let formUrl = this.router.url;
    var temp = formUrl.split('form', 2);
    var formId = Number(temp[1].split('/', 2)[1]);

    return formId;
  }
}

