import { Injectable } from '@angular/core';
import { Form } from '@datas/models/base/form';
import { Question } from '@datas/models/base/question';
import { UserDto } from '@datas/models/dto/user-dto';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { QuestionSettingsService } from '../question-settings/question-settings.service';

@Injectable({
  providedIn: 'root'
})
export class NextPrevService {
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
  
  constructor(private localStorageService: LocalStorageService, private questionSettingsService: QuestionSettingsService) { 
    this.questionNumber = localStorageService.getFilledForm().questions.length;
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

    this.localStorageService.setFilledQuestion(this.filledQuestion);
  }

  
  getQuestions() {
    return this.localStorageService.getFilledForm().questions;
  }
}

