import { Component, OnInit } from '@angular/core';
import { Question } from '@datas/models/base/question';
import { RankingQuestion } from '@datas/models/question-types/ranking-question';
import { RankingDetailService } from '@datas/services/question-types/ranking/ranking-detail.service';
import { RankingQuestionService } from '@datas/services/question-types/ranking/ranking-question.service';
import { RankingChoiceSortService } from '@shared/services/ranking-choice-sort/ranking-choice-sort.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { SubmitService } from '@datas/services/submit/submit.service';

@Component({
  selector: 'app-fill-ranking-question',
  templateUrl: './fill-question.component.html',
  styleUrls: ['./fill-question.component.scss'],
})
export class FillQuestionComponent implements OnInit {
  filledQuestion: Question;
  filledQuestionSettings: RankingQuestion;
  choices: any = [];
  isSame: boolean = false;
  response: any;
  responses: any = [];
  isChange = false;

  constructor(
    private rankingQuestionService: RankingQuestionService,
    private rankingChoiceSortService: RankingChoiceSortService,
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
      this.isChange = this.response.isChange;

      this.setResponse(this.response.value);
    } else {
      this.setFilledQuestionSettings(this.filledQuestion);
    }
  }

  private setFilledQuestionSettings(question: Question) {
    this.rankingQuestionService.getById(question.id).subscribe((response) => {
      this.filledQuestionSettings = response.data;

      this.choices = this.rankingChoiceSortService.sort(
        this.filledQuestionSettings.rankingDetails
      );

      this.localStorageService.setFilledQuestionSettings(
        this.filledQuestionSettings
      );

      this.localStorageService.setFilledRankingChoices(this.choices);

      this.setResponse(this.choices);
    });
  }

  reorder(choiceId, targetRank, choices) {
    this.choices = choices;

    this.rankingChoiceSortService.reorder(
      choiceId,
      targetRank,
      this.choices,
      false
    );

    this.choices = this.rankingChoiceSortService.sort(this.choices);

    this.filledQuestionSettings.rankingDetails = this.choices;

    this.localStorageService.setFilledRankingChoices(this.choices);
    this.localStorageService.setFilledQuestionSettings(
      this.filledQuestionSettings
    );
    this.isChange = true;
    this.setResponse(this.choices);
  }

  setResponse(value) {
    let isComplete = false;
    let isThere = false;
    if (this.isChange) {
      isComplete = true;
    } else {
      if (!this.filledQuestionSettings.isRequired) {
        isComplete = true;
      }
    }

    for (let i = 0; i < this.responses.length; i++) {
      if (this.filledQuestion.id == this.responses[i].question.id) {
        this.responses[i].value = value;
        this.responses[i].isComplete = isComplete;
        this.responses[i].isChange = this.isChange;

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
        isChange: this.isChange,
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
      this.filledQuestion.id != this.localStorageService.getFilledQuestion().id
    ) {
      this.ngOnInit();
    }

    return true;
  }

  getChoices() {
    if (this.getResponse()) {
      return this.response.value;
    } else {
      return this.localStorageService.getFilledRankingChoices();
    }
  }

  getFilledQuestion() {
    return this.localStorageService.getFilledQuestion();
  }

  isLastQuestion() {
    return (
      this.filledQuestion.questionOrder ==
      this.localStorageService.getFilledForm().questions.length
    );
  }

  getIsChange() {
    for (let i = 0; i < this.responses.length; i++) {
      if (this.filledQuestion.id == this.responses[i].question.id) {
        this.isChange = this.responses[i].isChange;
        return this.isChange;
      }
    }

    this.isChange = null;
    return this.isChange;
  }

  submit() {
    this.submitService.submitResponse(this.responses);
  }
}
