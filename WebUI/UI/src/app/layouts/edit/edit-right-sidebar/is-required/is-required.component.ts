import { Component, OnInit } from '@angular/core';
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
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { QuestionSettingsService } from '@shared/services/question-settings/question-settings.service';
import { QuestionTypesValidationService } from '@shared/services/validations/question-types-validation/question-types-validation.service';

@Component({
  selector: 'app-is-required',
  templateUrl: './is-required.component.html',
  styleUrls: ['./is-required.component.scss'],
})
export class IsRequiredComponent implements OnInit {
  editedQuestion: Question;
  editedQuestionSettings;
  isRequired: boolean;

  constructor(
    private dateQuestionService: DateQuestionService,
    private emailQuestionService: EmailQuestionService,
    private multipleChoiceQuestionService: MultipleChoiceQuestionService,
    private numberQuestionService: NumberQuestionService,
    private opinionScaleQuestionService: OpinionScaleQuestionService,
    private phoneNumberQuestionService: PhoneNumberQuestionService,
    private rankingQuestionService: RankingQuestionService,
    private ratingQuestionService: RatingQuestionService,
    private textQuestionService: TextQuestionService,
    private websiteQuestionService: WebsiteQuestionService,
    private yesNoQuestionService: YesNoQuestionService,
    private questionTypesValidationService: QuestionTypesValidationService,
    private localStorageService: LocalStorageService,
    private questionSettingsService: QuestionSettingsService
  ) {}

  ngOnInit(): void {
    this.editedQuestion = this.localStorageService.getEditedQuestion();
    this.isRequired = this.getIsRequired();
  }

  getIsRequired() {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();
    this.isRequired = this.editedQuestionSettings.isRequired;
    return this.isRequired;
  }

  setIsRequired(value: boolean) {
    this.isRequired = value;
    this.editedQuestionSettings.isRequired = this.isRequired;
    this.localStorageService.setEditedQuestionSettings(
      this.editedQuestionSettings
    );

    this.questionSettingsService.updateQuestionSettings(
      this.editedQuestion,
      this.editedQuestionSettings
    );
  }
}
