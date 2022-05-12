import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NumberQuestion } from '@datas/models/question-types/number-question';
import { ResponseModel } from '@datas/models/generics/response-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NumberQuestionService {
  private apiUrl = environment.apiUrl + 'numberquestions/';

  constructor(private httpClient: HttpClient) {}

  getById(questionId: number) {
    let newPath = this.apiUrl + 'getbyid?id=' + questionId;
    return this.httpClient.get<SingleResponseModel<NumberQuestion>>(newPath);
  }

  create(numberQuestion: NumberQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', numberQuestion);
  }

  update(numberQuestion: NumberQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', numberQuestion);
  }

  delete(numberQuestion: NumberQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', numberQuestion);
  }
}
