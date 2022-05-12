import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from '@datas/models/base/form';
import { Question } from '@datas/models/base/question';
import { DateQuestionService } from '@datas/services/question-types/date/date-question.service';
import { EmailQuestionService } from '@datas/services/question-types/email/email-question.service';
import { MultipleChoiceQuestionService } from '@datas/services/question-types/multiple-choice/multiple-choice-question.service';
import { NumberQuestionService } from '@datas/services/question-types/number/number-question.service';
import { OpinionScaleQuestionService } from '@datas/services/question-types/opinion-scale/opinion-scale-question.service';
import { PhoneNumberQuestionService } from '@datas/services/question-types/phone-number/phone-number-question.service';
import { RankingQuestionService } from '@datas/services/question-types/ranking/ranking-question.service';
import { RatingQuestionService } from '@datas/services/question-types/rating/rating-question.service';
import { TextQuestionService } from '@datas/services/question-types/text/text-question.service';
import { WebsiteQuestionService } from '@datas/services/question-types/website/website-question.service';
import { YesNoQuestionService } from '@datas/services/question-types/yes-no/yes-no-question.service';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { RankingChoiceSortService } from '../ranking-choice-sort/ranking-choice-sort.service';
import { QuestionTypesValidationService } from '../validations/question-types-validation/question-types-validation.service';

@Injectable({
  providedIn: 'root',
})
export class QuestionSettingsService {
  private form: Form;
  private editedQuestion: Question;
  private questionSettings;
  private action;
  private navigate;

  constructor(
    private router: Router,
    private dateQuestionService: DateQuestionService,
    private emailQuestionService: EmailQuestionService,
    private multipleChoiceQuestionService: MultipleChoiceQuestionService,
    private numberQuestionService: NumberQuestionService,
    private opinionScaleQuestionService: OpinionScaleQuestionService,
    private phoneNumberQuestionService: PhoneNumberQuestionService,
    private rankingQuestionService: RankingQuestionService,
    private rankingChoiceSortService: RankingChoiceSortService,
    private ratingQuestionService: RatingQuestionService,
    private textQuestionService: TextQuestionService,
    private websiteQuestionService: WebsiteQuestionService,
    private yesNoQuestionService: YesNoQuestionService,
    private localStorageService: LocalStorageService,
    public questionTypesValidationService: QuestionTypesValidationService
  ) {}

  setQuestionSettings(question: Question, where: any) {
    if (question.questionTypeId != 0) {
      this.setDateQuestionSettings(question, where);
      this.setEmailQuestionSettings(question, where);
      this.setMultipleChoiceQuestionSettings(question, where);
      this.setNumberQuestionSettings(question, where);
      this.setOpinionScaleQuestionSettings(question, where);
      this.setPhoneNumberQuestionSettings(question, where);
      this.setRankingQuestionSettings(question, where);
      this.setRatingQuestionSettings(question, where);
      this.setTextQuestionSettings(question, where);
      this.setWebsiteQuestionSettings(question, where);
      this.setYesNoQuestionSettings(question, where);
    } else {
      if (this.navigate) {
        this.router.navigate([this.navigate]);
      }
    }
  }

  updateQuestionSettings(question: Question, editedQuestionSettings) {
    this.updateDateQuestionSettings(question, editedQuestionSettings);
    this.updateEmailQuestionSettings(question, editedQuestionSettings);
    this.updateMultipleChoiceQuestionSettings(question, editedQuestionSettings);
    this.updateNumberQuestionSettings(question, editedQuestionSettings);
    this.updateOpinionScaleQuestionSettings(question, editedQuestionSettings);
    this.updatePhoneNumberQuestionSettings(question, editedQuestionSettings);
    this.updateRankingQuestionSettings(question, editedQuestionSettings);
    this.updateRatingQuestionSettings(question, editedQuestionSettings);
    this.updateTextQuestionSettings(question, editedQuestionSettings);
    this.updateWebsiteQuestionSettings(question, editedQuestionSettings);
    this.updateYesNoQuestionSettings(question, editedQuestionSettings);
  }

  setAction(action: string) {
    this.action = action;
    this.localStorageService.setFormAction(action);
  }

  setNavigate(navigate: string, formToNavigate: Form) {
    this.navigate = navigate;
    this.form = formToNavigate;
  }

  private setDateQuestionSettings(question: Question, where: any) {
    if (this.questionTypesValidationService.isDateQuestion(question)) {
      this.setSettings(this.dateQuestionService, where, question);
    }
  }

  private setEmailQuestionSettings(question: Question, where: any) {
    if (this.questionTypesValidationService.isEmailQuestion(question)) {
      this.setSettings(this.emailQuestionService, where, question);
    }
  }

  private setMultipleChoiceQuestionSettings(question: Question, where: any) {
    if (
      this.questionTypesValidationService.isMultipleChoiceQuestion(question)
    ) {
      this.setSettings(this.multipleChoiceQuestionService, where, question);
    }
  }

  private setNumberQuestionSettings(question: Question, where: any) {
    if (this.questionTypesValidationService.isNumberQuestion(question)) {
      this.setSettings(this.numberQuestionService, where, question);
    }
  }

  private setOpinionScaleQuestionSettings(question: Question, where: any) {
    if (this.questionTypesValidationService.isOpinionScaleQuestion(question)) {
      this.setSettings(this.opinionScaleQuestionService, where, question);
    }
  }

  private setPhoneNumberQuestionSettings(question: Question, where: any) {
    if (this.questionTypesValidationService.isPhoneNumberQuestion(question)) {
      this.setSettings(this.phoneNumberQuestionService, where, question);
    }
  }

  private setRankingQuestionSettings(question: Question, where: any) {
    if (this.questionTypesValidationService.isRankingQuestion(question)) {
      this.setSettings(this.rankingQuestionService, where, question);
    }
  }

  private setRatingQuestionSettings(question: Question, where: any) {
    if (this.questionTypesValidationService.isRatingQuestion(question)) {
      this.setSettings(this.ratingQuestionService, where, question);
    }
  }

  private setTextQuestionSettings(question: Question, where: any) {
    if (this.questionTypesValidationService.isTextQuestion(question)) {
      this.setSettings(this.textQuestionService, where, question);
    }
  }

  private setWebsiteQuestionSettings(question: Question, where: any) {
    if (this.questionTypesValidationService.isWebsiteQuestion(question)) {
      this.setSettings(this.websiteQuestionService, where, question);
    }
  }

  private setYesNoQuestionSettings(question: Question, where: any) {
    if (this.questionTypesValidationService.isYesNoQuestion(question)) {
      this.setSettings(this.yesNoQuestionService, where, question);
    }
  }

  private updateDateQuestionSettings(
    question: Question,
    editedQuestionSettings
  ) {
    if (this.questionTypesValidationService.isDateQuestion(question)) {
      this.update(this.dateQuestionService, editedQuestionSettings);
    }
  }

  private updateEmailQuestionSettings(
    question: Question,
    editedQuestionSettings
  ) {
    if (this.questionTypesValidationService.isEmailQuestion(question)) {
      this.update(this.emailQuestionService, editedQuestionSettings);
    }
  }

  private updateMultipleChoiceQuestionSettings(
    question: Question,
    editedQuestionSettings
  ) {
    if (
      this.questionTypesValidationService.isMultipleChoiceQuestion(question)
    ) {
      this.update(this.multipleChoiceQuestionService, editedQuestionSettings);
    }
  }

  private updateNumberQuestionSettings(
    question: Question,
    editedQuestionSettings
  ) {
    if (this.questionTypesValidationService.isNumberQuestion(question)) {
      this.update(this.numberQuestionService, editedQuestionSettings);
    }
  }

  private updateOpinionScaleQuestionSettings(
    question: Question,
    editedQuestionSettings
  ) {
    if (this.questionTypesValidationService.isOpinionScaleQuestion(question)) {
      this.update(this.opinionScaleQuestionService, editedQuestionSettings);
    }
  }

  private updatePhoneNumberQuestionSettings(
    question: Question,
    editedQuestionSettings
  ) {
    if (this.questionTypesValidationService.isPhoneNumberQuestion(question)) {
      this.update(this.phoneNumberQuestionService, editedQuestionSettings);
    }
  }

  private updateRankingQuestionSettings(
    question: Question,
    editedQuestionSettings
  ) {
    if (this.questionTypesValidationService.isRankingQuestion(question)) {
      this.update(this.rankingQuestionService, editedQuestionSettings);
    }
  }

  private updateRatingQuestionSettings(
    question: Question,
    editedQuestionSettings
  ) {
    if (this.questionTypesValidationService.isRatingQuestion(question)) {
      this.update(this.ratingQuestionService, editedQuestionSettings);
    }
  }

  private updateTextQuestionSettings(
    question: Question,
    editedQuestionSettings
  ) {
    if (this.questionTypesValidationService.isTextQuestion(question)) {
      this.update(this.textQuestionService, editedQuestionSettings);
    }
  }

  private updateWebsiteQuestionSettings(
    question: Question,
    editedQuestionSettings
  ) {
    if (this.questionTypesValidationService.isWebsiteQuestion(question)) {
      this.update(this.websiteQuestionService, editedQuestionSettings);
    }
  }

  private updateYesNoQuestionSettings(
    question: Question,
    editedQuestionSettings
  ) {
    if (this.questionTypesValidationService.isYesNoQuestion(question)) {
      this.update(this.yesNoQuestionService, editedQuestionSettings);
    }
  }

  private setSettings(service: any, whereTo: any, question: Question) {
    service.getById(question.id).subscribe((response) => {
      this.questionSettings = response.data;
      whereTo(this.questionSettings);

      this.rankingChoicesSort(question, this.questionSettings);
      if (this.navigate) {
        this.router.navigate([this.navigate]);
      }
    });
  }

  private rankingChoicesSort(question: Question, questionSettings) {
    if (this.questionTypesValidationService.isRankingQuestion(question)) {
      questionSettings.rankingDetails = this.rankingChoiceSortService.sort(
        questionSettings.rankingDetails
      );
    }
  }

  private update(service: any, editedQuestionSettings) {
    service.update(editedQuestionSettings).subscribe();
  }
}
