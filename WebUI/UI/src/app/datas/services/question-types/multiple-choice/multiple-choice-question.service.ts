import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MultipleChoiceQuestion } from '@datas/models/question-types/multiple-choice-question';
import { ResponseModel } from '@datas/models/generics/response-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MultipleChoiceQuestionService {
  private apiUrl = environment.apiUrl + 'multiplechoicequestions/';

  constructor(private httpClient: HttpClient) {}

  getById(questionId: number) {
    let newPath = this.apiUrl + 'getbyid?id=' + questionId;
    return this.httpClient.get<SingleResponseModel<MultipleChoiceQuestion>>(newPath);
  }

  create(multipleChoiceQuestion: MultipleChoiceQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', multipleChoiceQuestion);
  }

  update(multipleChoiceQuestion: MultipleChoiceQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', multipleChoiceQuestion);
  }

  delete(multipleChoiceQuestion: MultipleChoiceQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', multipleChoiceQuestion);
  }

  
}
