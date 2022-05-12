import { Injectable } from '@angular/core';
import { Question } from '@datas/models/base/question';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionTypesValidationService {

  constructor(private localStorageService: LocalStorageService) { }

  isDateQuestion(question: Question) {
    this.localStorageService.setLoadedQuestion(question);
    return question.questionTypeId === 1;
  }

  isEmailQuestion(question: Question) {
    this.localStorageService.setLoadedQuestion(question);
    return question.questionTypeId === 2;
  }

  isMultipleChoiceQuestion(question: Question) {
    
    this.localStorageService.setLoadedQuestion(question);
    return question.questionTypeId === 3;
  }

  isNumberQuestion(question: Question) {
    this.localStorageService.setLoadedQuestion(question);
    return question.questionTypeId === 4;
  }

  isOpinionScaleQuestion(question: Question) {
    this.localStorageService.setLoadedQuestion(question);
    return question.questionTypeId === 5;
  }

  isPhoneNumberQuestion(question: Question) {
    this.localStorageService.setLoadedQuestion(question);
    return question.questionTypeId === 6;
  }

  isRankingQuestion(question: Question) {
    this.localStorageService.setLoadedQuestion(question);
    return question.questionTypeId === 7;
  }

  isRatingQuestion(question: Question) {
    this.localStorageService.setLoadedQuestion(question);
    return question.questionTypeId === 8;
  }

  isTextQuestion(question: Question) {
    this.localStorageService.setLoadedQuestion(question);
    return question.questionTypeId === 9;
  }

  isWebsiteQuestion(question: Question) {
    this.localStorageService.setLoadedQuestion(question);
    return question.questionTypeId === 10;
  }

  isYesNoQuestion(question: Question) {
    this.localStorageService.setLoadedQuestion(question);
    return question.questionTypeId === 11;
  }
}
