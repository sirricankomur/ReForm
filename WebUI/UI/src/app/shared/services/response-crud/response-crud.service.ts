import { Injectable } from '@angular/core';
import { Form } from '@datas/models/base/form';
import { Question } from '@datas/models/base/question';
import { Response } from '@datas/models/base/response';
import { UserDto } from '@datas/models/dto/user-dto';
import { FormUser } from '@datas/models/intermediate/form-user';
import { DateResponse } from '@datas/models/response-types/date-response';
import { EmailResponse } from '@datas/models/response-types/email-response';
import { MultipleChoiceResponse } from '@datas/models/response-types/multiple-choice-response';
import { NumberResponse } from '@datas/models/response-types/number-response';
import { OpinionScaleResponse } from '@datas/models/response-types/opinion-scale-response';
import { PhoneNumberResponse } from '@datas/models/response-types/phone-number-response';
import { RankingResponse } from '@datas/models/response-types/ranking-response';
import { RatingResponse } from '@datas/models/response-types/rating-response';
import { TextResponse } from '@datas/models/response-types/text-response';
import { WebsiteResponse } from '@datas/models/response-types/website-response';
import { YesNoResponse } from '@datas/models/response-types/yes-no-response';
import { FormUserService } from '@datas/services/intermediate/form-user/form-user.service';
import { MultipleChoiceDetailService } from '@datas/services/question-types/multiple-choice/multiple-choice-detail.service';
import { OpinionScaleQuestionService } from '@datas/services/question-types/opinion-scale/opinion-scale-question.service';
import { RankingDetailService } from '@datas/services/question-types/ranking/ranking-detail.service';
import { RatingQuestionService } from '@datas/services/question-types/rating/rating-question.service';
import { DateResponseService } from '@datas/services/response-types/date/date-response.service';
import { EmailResponseService } from '@datas/services/response-types/email/email-response.service';
import { MultipleChoiceResponseService } from '@datas/services/response-types/multiple-choice/multiple-choice-response.service';
import { NumberResponseService } from '@datas/services/response-types/number/number-response.service';
import { OpinionScaleResponseService } from '@datas/services/response-types/opinion-scale/opinion-scale-response.service';
import { PhoneNumberResponseService } from '@datas/services/response-types/phone-number/phone-number-response.service';
import { RankingResponseService } from '@datas/services/response-types/ranking/ranking-response.service';
import { RatingResponseService } from '@datas/services/response-types/rating/rating-response.service';
import { TextResponseService } from '@datas/services/response-types/text/text-response.service';
import { WebsiteResponseService } from '@datas/services/response-types/website/website-response.service';
import { YesNoResponseService } from '@datas/services/response-types/yes-no/yes-no-response.service';
import { ResponseService } from '@datas/services/base/response/response.service';
import { UserResponseService } from '@datas/services/intermediate/user-response/user-response.service';
import { finalize } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { QuestionSettingsService } from '../question-settings/question-settings.service';
import { QuestionTypesValidationService } from '../validations/question-types-validation/question-types-validation.service';

@Injectable({
  providedIn: 'root',
})
export class ResponseCrudService {
  form: Form;
  user: UserDto;
  public responses;

  constructor(
    private responseService: ResponseService,
    private questionTypesValidationService: QuestionTypesValidationService,
    private dateResponseService: DateResponseService,
    private emailResponseService: EmailResponseService,
    private multipleChoiceResponseService: MultipleChoiceResponseService,
    private multipleChoiceDetailService: MultipleChoiceDetailService,
    private numberResponseService: NumberResponseService,
    private opinionScaleResponseService: OpinionScaleResponseService,
    private opinionScaleQuestionService: OpinionScaleQuestionService,
    private phoneNumberResponseService: PhoneNumberResponseService,
    private rankingResponseService: RankingResponseService,
    private rankingDetailService: RankingDetailService,
    private ratingResponseService: RatingResponseService,
    private ratingQuestionService: RatingQuestionService,
    private textResponseService: TextResponseService,
    private websiteResponseService: WebsiteResponseService,
    private yesNoResponseService: YesNoResponseService,
    private userResponseService: UserResponseService,
    private formUserService: FormUserService,
    private localStorageService: LocalStorageService,
    private questionSettingsService: QuestionSettingsService
  ) {
    this.responses = new Array();
  }

  createResponses() {
    this.user = this.localStorageService.getUser();
    this.form = this.localStorageService.getFilledForm();
    let formUser = new FormUser(this.form.id, this.user.id);

    this.formUserService.create(formUser).subscribe();

    for (let i = 0; i < this.localStorageService.getResponses().length; i++) {
      if (this.localStorageService.getResponses()[i]) {
        let question = this.localStorageService.getResponses()[i].question;
        let value = this.localStorageService.getResponses()[i].value;
        let response = new Response(question.id, this.form.id, this.user.id);
        let responses;
        this.responseService
          .create(response)
          .pipe(
            finalize(() => {
              this.responseService
                .getLastResponses(
                  this.localStorageService.getResponses().length
                )
                .subscribe((lastResponses) => {
                  responses = lastResponses.data;

                  for (let j = 0; j < responses.length; j++) {
                    if (responses[j].questionId == question.id) {
                      if (
                        this.questionTypesValidationService.isRankingQuestion(
                          question
                        )
                      ) {
                        this.bindResponseToResponseTypeTable(
                          responses[j],
                          question,
                          value,
                          this.localStorageService.getResponses()[i].isChange
                        );
                      } else {
                        this.bindResponseToResponseTypeTable(
                          responses[j],
                          question,
                          value
                        );
                      }
                    }
                  }
                });
            })
          )
          .subscribe();
      }
    }
  }

  getResponseById(response: Response, responses: any[], question: Question) {
    this.setDateResponse(response, responses, question);
    this.setEmailResponse(response, responses, question);
    this.setMultipleChoiceResponse(response, responses, question);
    this.setNumberResponse(response, responses, question);
    this.setOpinionScaleResponse(response, responses, question);
    this.setPhoneNumberResponse(response, responses, question);
    this.setRankingResponse(response, responses, question);
    this.setRatingResponse(response, responses, question);
    this.setTextResponse(response, responses, question);
    this.setWebsiteResponse(response, responses, question);
    this.setYesNoResponse(response, responses, question);
  }

  private bindResponseToResponseTypeTable(
    response: any,
    question: Question,
    value: any,
    isComplete?: boolean
  ) {
    this.createDateResponse(response, question, value);
    this.createEmailResponse(response, question, value);
    this.createMultipleChoiceResponse(response, question, value);
    this.createNumberResponse(response, question, value);
    this.createOpinionScaleResponse(response, question, value);
    this.createPhoneNumberResponse(response, question, value);
    this.createRankingResponse(response, question, value, isComplete);
    this.createRatingResponse(response, question, value);
    this.createTextResponse(response, question, value);
    this.createWebsiteResponse(response, question, value);
    this.createYesNoResponse(response, question, value);
  }

  private createDateResponse(
    response: Response,
    question: Question,
    value: any,
    isComplete?: boolean
  ) {
    if (this.questionTypesValidationService.isDateQuestion(question)) {
      let dateResponse;

      if (value) {
        dateResponse = new DateResponse(response.id, value);
      } else {
        dateResponse = new DateResponse(response.id);
      }

      this.create(this.dateResponseService, dateResponse);
    }
  }

  private createEmailResponse(
    response: Response,
    question: Question,
    value: any,
    isComplete?: boolean
  ) {
    if (this.questionTypesValidationService.isEmailQuestion(question)) {
      let emailResponse;
      if (value) {
        emailResponse = new EmailResponse(response.id, value);
      } else {
        emailResponse = new EmailResponse(response.id);
      }
      this.create(this.emailResponseService, emailResponse);
    }
  }

  private createMultipleChoiceResponse(
    response: Response,
    question: Question,
    value: any,
    isComplete?: boolean
  ) {
    if (
      this.questionTypesValidationService.isMultipleChoiceQuestion(question)
    ) {
      if (value.length == 1 && value[0] == '') {
        value = null;
      } else {
        let valueString = '';

        for (let i = 0; i < value.length; i++) {
          if (i == 0) {
            valueString = valueString + value[i];
          } else {
            valueString = valueString + ',' + value[i];
          }
        }

        value = valueString;
      }
      let multipleChoiceResponse = new MultipleChoiceResponse(
        response.id,
        value
      );
      this.create(this.multipleChoiceResponseService, multipleChoiceResponse);
    }
  }

  private createNumberResponse(
    response: Response,
    question: Question,
    value: number,
    isComplete?: boolean
  ) {
    if (this.questionTypesValidationService.isNumberQuestion(question)) {
      value = Number(value);
      let numberResponse;

      if (value) {
        numberResponse = new NumberResponse(response.id, value);
      } else {
        numberResponse = new NumberResponse(response.id);
      }

      this.create(this.numberResponseService, numberResponse);
    }
  }

  private createOpinionScaleResponse(
    response: Response,
    question: Question,
    value: any,
    isComplete?: boolean
  ) {
    if (this.questionTypesValidationService.isOpinionScaleQuestion(question)) {
      let opinionScaleResponse;
      if (value) {
        value = Number(value);
        opinionScaleResponse = new OpinionScaleResponse(response.id, value);
      } else {
        opinionScaleResponse = new OpinionScaleResponse(response.id, 11);
      }
      this.create(this.opinionScaleResponseService, opinionScaleResponse);
    }
  }

  private createPhoneNumberResponse(
    response: Response,
    question: Question,
    value: any,
    isComplete?: boolean
  ) {
    if (this.questionTypesValidationService.isPhoneNumberQuestion(question)) {
      let phoneNumberResponse;
      if (value) {
        value = value.split(' ');
        let a = '';

        for (let i = 0; i < value.length; i++) {
          a = a + value[i];
        }
        value = '+90' + a;
        phoneNumberResponse = new PhoneNumberResponse(response.id, value);
      } else {
        phoneNumberResponse = new PhoneNumberResponse(response.id);
      }
      this.create(this.phoneNumberResponseService, phoneNumberResponse);
    }
  }

  private createRankingResponse(
    response: Response,
    question: Question,
    value: any,
    isComplete?: boolean
  ) {
    if (this.questionTypesValidationService.isRankingQuestion(question)) {
      if (!isComplete) {
        value = null;
      } else {
        let valueString = '';
        for (let i = 0; i < value.length; i++) {
          if (i == 0) {
            valueString = valueString + value[i].rankingDetailId;
          } else {
            valueString = valueString + ',' + value[i].rankingDetailId;
          }
        }

        value = valueString;
      }

      let rankingResponse = new RankingResponse(response.id, value);

      this.create(this.rankingResponseService, rankingResponse);
    }
  }

  private createRatingResponse(
    response: Response,
    question: Question,
    value: any,
    isComplete?: boolean
  ) {
    if (this.questionTypesValidationService.isRatingQuestion(question)) {
      value = Number(value);
      let ratingResponse;
      if (value) {
        ratingResponse = new RatingResponse(response.id, Number(value));
      } else {
        ratingResponse = new RatingResponse(response.id);
      }
      this.create(this.ratingResponseService, ratingResponse);
    }
  }

  private createTextResponse(
    response: Response,
    question: Question,
    value: any,
    isComplete?: boolean
  ) {
    if (this.questionTypesValidationService.isTextQuestion(question)) {
      let textResponse;
      if (value) {
        textResponse = new TextResponse(response.id, value);
      } else {
        textResponse = new TextResponse(response.id);
      }
      this.create(this.textResponseService, textResponse);
    }
  }

  private createWebsiteResponse(
    response: Response,
    question: Question,
    value: any,
    isComplete?: boolean
  ) {
    if (this.questionTypesValidationService.isWebsiteQuestion(question)) {
      let websiteResponse;
      if (value) {
        websiteResponse = new WebsiteResponse(response.id, value);
      } else {
        websiteResponse = new WebsiteResponse(response.id);
      }
      this.create(this.websiteResponseService, websiteResponse);
    }
  }

  private createYesNoResponse(
    response: Response,
    question: Question,
    value: any,
    isComplete?: boolean
  ) {
    if (this.questionTypesValidationService.isYesNoQuestion(question)) {
      let yesNoResponse;
      if (value) {
        if (value == 'true') {
          value = 'yes';
        } else if (value == 'false') {
          value = 'no';
        }

        yesNoResponse = new YesNoResponse(response.id, value);
      } else {
        yesNoResponse = new YesNoResponse(response.id);
      }
      this.create(this.yesNoResponseService, yesNoResponse);
    }
  }

  private setDateResponse(
    response: Response,
    responses: any[],
    question: Question
  ) {
    if (this.questionTypesValidationService.isDateQuestion(question)) {
      this.setResponse(this.dateResponseService, response, responses, question);
    }
  }

  private setEmailResponse(
    response: Response,
    responses: any[],
    question: Question
  ) {
    if (this.questionTypesValidationService.isEmailQuestion(question)) {
      this.setResponse(
        this.emailResponseService,
        response,
        responses,
        question
      );
    }
  }

  private setMultipleChoiceResponse(
    response: Response,
    responses: any[],
    question: Question
  ) {
    if (
      this.questionTypesValidationService.isMultipleChoiceQuestion(question)
    ) {
      this.setResponse(
        this.multipleChoiceResponseService,
        response,
        responses,
        question
      );
    }
  }

  private setNumberResponse(
    response: Response,
    responses: any[],
    question: Question
  ) {
    if (this.questionTypesValidationService.isNumberQuestion(question)) {
      this.setResponse(
        this.numberResponseService,
        response,
        responses,
        question
      );
    }
  }

  private setOpinionScaleResponse(
    response: Response,
    responses: any[],
    question: Question
  ) {
    if (this.questionTypesValidationService.isOpinionScaleQuestion(question)) {
      this.setResponse(
        this.opinionScaleResponseService,
        response,
        responses,
        question
      );
    }
  }

  private setPhoneNumberResponse(
    response: Response,
    responses: any[],
    question: Question
  ) {
    if (this.questionTypesValidationService.isPhoneNumberQuestion(question)) {
      this.setResponse(
        this.phoneNumberResponseService,
        response,
        responses,
        question
      );
    }
  }

  private setRankingResponse(
    response: Response,
    responses: any[],
    question: Question
  ) {
    if (this.questionTypesValidationService.isRankingQuestion(question)) {
      this.setResponse(
        this.rankingResponseService,
        response,
        responses,
        question
      );
    }
  }

  private setRatingResponse(
    response: Response,
    responses: any[],
    question: Question
  ) {
    if (this.questionTypesValidationService.isRatingQuestion(question)) {
      this.setResponse(
        this.ratingResponseService,
        response,
        responses,
        question
      );
    }
  }

  private setTextResponse(
    response: Response,
    responses: any[],
    question: Question
  ) {
    if (this.questionTypesValidationService.isTextQuestion(question)) {
      this.setResponse(this.textResponseService, response, responses, question);
    }
  }

  private setWebsiteResponse(
    response: Response,
    responses: any[],
    question: Question
  ) {
    if (this.questionTypesValidationService.isWebsiteQuestion(question)) {
      this.setResponse(
        this.websiteResponseService,
        response,
        responses,
        question
      );
    }
  }

  private setYesNoResponse(
    response: Response,
    responses: any[],
    question: Question
  ) {
    if (this.questionTypesValidationService.isYesNoQuestion(question)) {
      this.setResponse(
        this.yesNoResponseService,
        response,
        responses,
        question
      );
    }
  }

  private create(service: any, response: any) {
    service.create(response).subscribe();
  }

  private setResponse(
    service: any,
    response: Response,
    responses: any[],
    question: Question
  ) {
    let newResponse;
    service.getById(response.id).subscribe((responseDb) => {
      let data = responseDb.data;
      this.formatDate(service, data);
      this.formatNumber(service, data);
      if (service == this.multipleChoiceResponseService) {
        this.formatMultipleChoice(service, data, response, responses, question);
      } else if (service == this.rankingResponseService) {
        this.formatRankingChoice(service, data, response, responses, question);
      } else if (service == this.opinionScaleResponseService) {
        this.formatOpinionScale(service, data, response, responses, question);
      } else if (service == this.ratingResponseService) {
        this.formatRating(service, data, response, responses, question);
      } else {
        newResponse = {
          responseId: data.responseId,
          question: question,
          userId: response.userId,
          value: data.value,
        };
        responses.push(newResponse);
      }
    });
  }

  formatDate(service: any, data: any) {
    if (service == this.dateResponseService) {
      data.value = data.value.substr(0, 10);
      if (data.value == '0001-01-01') {
        data.value = null;
      }
    }
  }

  formatNumber(service: any, data: any) {
    if (service == this.numberResponseService) {
      if (data.value == 0) {
        data.value = null;
      }
    }
  }

  formatYesNo(service: any, data: any) {
    if (service == this.yesNoResponseService) {
      if (data.value == true) {
        data.value = 'Yes';
      } else {
        data.value = 'No';
      }
    }
  }

  formatMultipleChoice(
    service: any,
    data: any,
    response: Response,
    responses: any[],
    question: Question
  ) {
    if (service == this.multipleChoiceResponseService) {
      let newResponse;

      this.multipleChoiceDetailService
        .getMultipleChoices(question.id)
        .subscribe((responseDb) => {
          data.value = data.value.split(',');
          if (data.value.length == 1 && data.value[0] == '') {
            data.value = null;
          } else {
            for (let i = 0; i < data.value.length; i++) {
              for (let j = 0; j < responseDb.data.length; j++) {
                if (
                  responseDb.data[j].multipleChoiceDetailId == data.value[i]
                ) {
                  data.value[i] = responseDb.data[j].title;
                }
              }
            }

            let valueString = '';

            for (let i = 0; i < data.value.length; i++) {
              if (i == data.value.length - 1) {
                valueString = valueString + data.value[i];
              } else {
                valueString = valueString + data.value[i] + ', ';
              }
            }
            data.value = valueString;
          }

          newResponse = {
            responseId: data.responseId,
            question: question,
            userId: response.userId,
            value: data.value,
          };
          responses.push(newResponse);
        });
    }
  }

  formatRankingChoice(
    service: any,
    data: any,
    response: Response,
    responses: any[],
    question: Question
  ) {
    if (service == this.rankingResponseService) {
      let newResponse;
      this.rankingDetailService
        .getRankingChoices(question.id)
        .subscribe((responseDb) => {
          if (data.value) {
            data.value = data.value.split(',');
            for (let i = 0; i < data.value.length; i++) {
              for (let j = 0; j < responseDb.data.length; j++) {
                if (responseDb.data[j].rankingDetailId == data.value[i]) {
                  data.value[i] = responseDb.data[j].title;
                }
              }
            }

            let valueString = '';

            for (let i = 0; i < data.value.length; i++) {
              if (i == data.value.length - 1) {
                valueString = valueString + data.value[i];
              } else {
                valueString = valueString + data.value[i] + ', ';
              }
            }
            data.value = valueString;
          }

          newResponse = {
            responseId: data.responseId,
            question: question,
            userId: response.userId,
            value: data.value,
          };
          responses.push(newResponse);
        });
    }
  }

  formatRating(
    service: any,
    data: any,
    response: Response,
    responses: any[],
    question: Question
  ) {
    if (service == this.ratingResponseService) {
      let newResponse;
      this.ratingQuestionService
        .getById(question.id)
        .subscribe((responseDb) => {
          if (data.value != 0) {
            data.value = data.value + ' / ' + responseDb.data.rate;
          } else {
            data.value = null;
          }
          newResponse = {
            responseId: data.responseId,
            question: question,
            userId: response.userId,
            value: data.value,
          };
          responses.push(newResponse);
        });
    }
  }

  formatOpinionScale(
    service: any,
    data: any,
    response: Response,
    responses: any[],
    question: Question
  ) {
    if (service == this.opinionScaleResponseService) {
      let newResponse;
      this.opinionScaleQuestionService
        .getById(question.id)
        .subscribe((responseDb) => {
          if (data.value != 11) {
            data.value = data.value + ' / ' + responseDb.data.maxScale;
          } else {
            data.value = null;
          }

          newResponse = {
            responseId: data.responseId,
            question: question,
            userId: response.userId,
            value: data.value,
          };
          responses.push(newResponse);
        });
    }
  }
}
