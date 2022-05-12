import { Injectable } from '@angular/core';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { ResponseCrudService } from '@shared/services/response-crud/response-crud.service';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {

  constructor(private localStorageService: LocalStorageService, private responseCrudService: ResponseCrudService) { }

  submitResponse(responses: any[]) {
    let isSubmit = true;
    responses = this.localStorageService.getResponses();

    for (let i = 0; i < responses.length; i++) {
      if (!responses[i].isComplete) {
        this.localStorageService.setFilledQuestion(responses[i].question);
        this.localStorageService.setFilledQuestionSettings(
          responses[i].questionSettings
        );

        if (responses[i].question.questionOrder > 1) {
          this.localStorageService.setPrevQuestionSettings(
            responses[i - 1].questionSettings
          );
        }

        if (
          responses[i].question.questionOrder <
          this.localStorageService.getFilledForm().questions.length
        ) {
          this.localStorageService.setNextQuestionSettings(
            responses[i + 1].questionSettings
          );
        }

        isSubmit = false;
      }
    }
    if (isSubmit) {
      this.responseCrudService.createResponses();
      this.localStorageService.setFormAction('submit');
    }
  }
}
