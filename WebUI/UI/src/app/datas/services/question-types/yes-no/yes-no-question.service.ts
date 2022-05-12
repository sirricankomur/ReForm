import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { YesNoQuestion } from '@datas/models/question-types/yes-no-question';
import { ResponseModel } from '@datas/models/generics/response-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YesNoQuestionService {
  private apiUrl = environment.apiUrl + 'yesnoquestions/';

  constructor(private httpClient: HttpClient) {}

  getById(questionId: number) {
    let newPath = this.apiUrl + 'getbyid?id=' + questionId;
    return this.httpClient.get<SingleResponseModel<YesNoQuestion>>(newPath);
  }

  create(yesNoQuestion: YesNoQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', yesNoQuestion);
  }

  update(yesNoQuestion: YesNoQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', yesNoQuestion);
  }

  delete(yesNoQuestion: YesNoQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', yesNoQuestion);
  }
}
