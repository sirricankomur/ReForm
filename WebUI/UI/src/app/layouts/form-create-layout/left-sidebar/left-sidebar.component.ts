import { Component, OnInit } from '@angular/core';
import { Form } from '@datas/models/base/form';
import { Question } from '@datas/models/base/question';
import { MultipleChoiceDetail } from '@datas/models/details/multiple-choice-detail';
import { DateQuestion } from '@datas/models/question-types/date-question';
import { EmailQuestion } from '@datas/models/question-types/email-question';
import { MultipleChoiceQuestion } from '@datas/models/question-types/multiple-choice-question';
import { NumberQuestion } from '@datas/models/question-types/number-question';
import { OpinionScaleQuestion } from '@datas/models/question-types/opinion-scale-question';
import { PhoneNumberQuestion } from '@datas/models/question-types/phone-number-question';
import { RankingQuestion } from '@datas/models/question-types/ranking-question';
import { RatingQuestion } from '@datas/models/question-types/rating-question';
import { TextQuestion } from '@datas/models/question-types/text-question';
import { WebsiteQuestion } from '@datas/models/question-types/website-question';
import { YesNoQuestion } from '@datas/models/question-types/yes-no-question';
import { RankingDetail } from '@datas/models/details/ranking-detail';
import { FormService } from '@datas/services/base/form/form.service';
import { DateQuestionService } from '@datas/services/question-types/date/date-question.service';
import { EmailQuestionService } from '@datas/services/question-types/email/email-question.service';
import { MultipleChoiceDetailService } from '@datas/services/question-types/multiple-choice/multiple-choice-detail.service';
import { MultipleChoiceQuestionService } from '@datas/services/question-types/multiple-choice/multiple-choice-question.service';
import { NumberQuestionService } from '@datas/services/question-types/number/number-question.service';
import { OpinionScaleQuestionService } from '@datas/services/question-types/opinion-scale/opinion-scale-question.service';
import { PhoneNumberQuestionService } from '@datas/services/question-types/phone-number/phone-number-question.service';
import { RankingDetailService } from '@datas/services/question-types/ranking/ranking-detail.service';
import { RankingQuestionService } from '@datas/services/question-types/ranking/ranking-question.service';
import { RatingQuestionService } from '@datas/services/question-types/rating/rating-question.service';
import { TextQuestionService } from '@datas/services/question-types/text/text-question.service';
import { WebsiteQuestionService } from '@datas/services/question-types/website/website-question.service';
import { YesNoQuestionService } from '@datas/services/question-types/yes-no/yes-no-question.service';
import { QuestionService } from '@datas/services/base/question/question.service';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { QuestionSortService } from '@shared/services/question-sort/question-sort.service';
import { QuestionTypesValidationService } from '@shared/services/validations/question-types-validation/question-types-validation.service';

@Component({
  selector: 'app-form-create-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss'],
})
export class LeftSidebarComponent implements OnInit {
  form: Form;
  createdQuestion: Question;
  dataLoaded: boolean = false;

  constructor(
    private questionService: QuestionService,
    private dateQuestionService: DateQuestionService,
    private emailQuestionService: EmailQuestionService,
    private multipleChoiceQuestionService: MultipleChoiceQuestionService,
    private multipleChoiceDetailService: MultipleChoiceDetailService,
    private numberQuestionService: NumberQuestionService,
    private opinionScaleQuestionService: OpinionScaleQuestionService,
    private phoneNumberQuestionService: PhoneNumberQuestionService,
    private rankingQuestionService: RankingQuestionService,
    private rankingDetailService: RankingDetailService,
    private ratingQuestionService: RatingQuestionService,
    private textQuestionService: TextQuestionService,
    private websiteQuestionService: WebsiteQuestionService,
    private yesNoQuestionService: YesNoQuestionService,
    private questionSortService: QuestionSortService,
    private formService: FormService,
    private localStorageService: LocalStorageService,
    public questionTypesValidationService: QuestionTypesValidationService
  ) {}

  ngOnInit(): void {
    this.form = this.localStorageService.getEditedForm();
    this.setForm(this.form);
  }

  createQuestion(questionTypeId: number) {
    this.form = this.localStorageService.getEditedForm();
    let formId = Number(this.form.id);
    let title = '...';
    let description = '';
    let questionOrder = Number(this.form.questions.length) + 1;
    let question = new Question(
      questionTypeId,
      formId,
      title,
      description,
      questionOrder
    );

    this.questionService.create(question).subscribe(() => {
      this.bindLastCreatedQuestionToQuestionTypeTable();
    });
  }

  bindLastCreatedQuestionToQuestionTypeTable() {
    this.questionService.getLastQuestion().subscribe((response) => {
      this.createdQuestion = response.data;
      this.localStorageService.setLoadedQuestion(this.createdQuestion);

      this.createDateQuestion(this.createdQuestion);
      this.createEmailQuestion(this.createdQuestion);
      this.createMultipleChoiceQuestion(this.createdQuestion);
      this.createNumberQuestion(this.createdQuestion);
      this.createOpinionScaleQuestion(this.createdQuestion);
      this.createPhoneNumberQuestion(this.createdQuestion);
      this.createRankingQuestion(this.createdQuestion);
      this.createRatingQuestion(this.createdQuestion);
      this.createTextQuestion(this.createdQuestion);
      this.createWebsiteQuestion(this.createdQuestion);
      this.createYesNoQuestion(this.createdQuestion);
    });
  }

  createDateQuestion(question: Question) {
    if (this.questionTypesValidationService.isDateQuestion(question)) {
      let dateQuestion = new DateQuestion(question.id, false);
      this.create(this.dateQuestionService, dateQuestion);
    }
  }

  createEmailQuestion(question: Question) {
    if (this.questionTypesValidationService.isEmailQuestion(question)) {
      let emailQuestion = new EmailQuestion(question.id, false);
      this.create(this.emailQuestionService, emailQuestion);
    }
  }

  createMultipleChoiceQuestion(question: Question) {
    if (
      this.questionTypesValidationService.isMultipleChoiceQuestion(question)
    ) {
      let multipleChoiceQuestion = new MultipleChoiceQuestion(
        question.id,
        false,
        false,
        false,
        true,
        false,
        false
      );

      this.create(this.multipleChoiceQuestionService, multipleChoiceQuestion);
      this.createMultipleChoiceDetails(question);
    }
  }

  createNumberQuestion(question: Question) {
    if (this.questionTypesValidationService.isNumberQuestion(question)) {
      let numberQuestion = new NumberQuestion(question.id, false, false, false);
      this.create(this.numberQuestionService, numberQuestion);
    }
  }

  createOpinionScaleQuestion(question: Question) {
    if (this.questionTypesValidationService.isOpinionScaleQuestion(question)) {
      let opinionScaleQuestion = new OpinionScaleQuestion(
        question.id,
        false,
        0,
        10
      );
      this.create(this.opinionScaleQuestionService, opinionScaleQuestion);
    }
  }

  createPhoneNumberQuestion(question: Question) {
    if (this.questionTypesValidationService.isPhoneNumberQuestion(question)) {
      let phoneNumberQuestion = new PhoneNumberQuestion(question.id, false);
      this.create(this.phoneNumberQuestionService, phoneNumberQuestion);
    }
  }

  createRankingQuestion(question: Question) {
    if (this.questionTypesValidationService.isRankingQuestion(question)) {
      let rankingQuestion = new RankingQuestion(question.id, false);
      this.create(this.rankingQuestionService, rankingQuestion);
      this.createRankingDetails(question);
    }
  }

  createRatingQuestion(question: Question) {
    if (this.questionTypesValidationService.isRatingQuestion(question)) {
      let ratingQuestion = new RatingQuestion(question.id, false, 3);
      this.create(this.ratingQuestionService, ratingQuestion);
    }
  }

  createTextQuestion(question: Question) {
    if (this.questionTypesValidationService.isTextQuestion(question)) {
      let textQuestion = new TextQuestion(question.id, false, false);
      this.create(this.textQuestionService, textQuestion);
    }
  }

  createWebsiteQuestion(question: Question) {
    if (this.questionTypesValidationService.isWebsiteQuestion(question)) {
      let websiteQuestion = new WebsiteQuestion(question.id, false);
      this.create(this.websiteQuestionService, websiteQuestion);
    }
  }

  createYesNoQuestion(question: Question) {
    if (this.questionTypesValidationService.isYesNoQuestion(question)) {
      let yesNoQuestion = new YesNoQuestion(question.id, false);
      this.create(this.yesNoQuestionService, yesNoQuestion);
    }
  }

  getQuestions() {
    return this.localStorageService.getEditedForm().questions;
  }

  getFormById(formId: number) {
    this.formService.getById(formId).subscribe((response) => {
      let form = response.data;
      form.questions = this.questionSortService.sort(response.data.questions);
      this.setForm(form);
    });
  }

  private setForm(form: Form) {
    this.formService.getById(form.id).subscribe((response) => {
      form = response.data;
      form.questions = this.questionSortService.sort(form.questions);
      this.localStorageService.setEditedForm(form);
    });
  }

  private create(service: any, question: any) {
    this.form = this.localStorageService.getEditedForm();
    service.create(question).subscribe(() => {
      this.setForm(this.form);
    });
  }

  private createRankingDetails(question: any) {
    let rankingDetail = new RankingDetail(question.id, 1, '...');
    this.rankingDetailService.create(rankingDetail).subscribe();
  }

  private createMultipleChoiceDetails(question: any) {
    console.log("DETAİL QUESTİ: ", question)
    let multipleChoiceDetailOther = new MultipleChoiceDetail(
      question.id,
      0,
      'Other',
      true
    );
    this.multipleChoiceDetailService.create(multipleChoiceDetailOther).subscribe();

    let multipleChoiceDetailChoice = new MultipleChoiceDetail(
      question.id,
      1,
      '...',
      true
    );
    
    this.multipleChoiceDetailService.create(multipleChoiceDetailChoice).subscribe();
  }
}
