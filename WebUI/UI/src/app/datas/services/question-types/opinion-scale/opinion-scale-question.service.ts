import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OpinionScaleQuestion } from '@datas/models/question-types/opinion-scale-question';
import { ResponseModel } from '@datas/models/generics/response-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpinionScaleQuestionService {
  private apiUrl = environment.apiUrl + 'opinionscalequestions/';

  constructor(private httpClient: HttpClient) {}

  getById(questionId: number) {
    let newPath = this.apiUrl + 'getbyid?id=' + questionId;
    return this.httpClient.get<SingleResponseModel<OpinionScaleQuestion>>(newPath);
  }

  create(opinionScaleQuestion: OpinionScaleQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', opinionScaleQuestion);
  }

  update(opinionScaleQuestion: OpinionScaleQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', opinionScaleQuestion);
  }

  delete(opinionScaleQuestion: OpinionScaleQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', opinionScaleQuestion);
  }
}
