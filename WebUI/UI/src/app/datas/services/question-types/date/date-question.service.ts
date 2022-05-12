import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DateQuestion } from '@datas/models/question-types/date-question';
import { ResponseModel } from '@datas/models/generics/response-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DateQuestionService {
  private apiUrl = environment.apiUrl + 'datequestions/';

  constructor(private httpClient: HttpClient) {}

  getById(questionId: number) {
    let newPath = this.apiUrl + 'getbyid?id=' + questionId;
    return this.httpClient.get<SingleResponseModel<DateQuestion>>(newPath);
  }

  create(dateQuestion: DateQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', dateQuestion);
  }

  update(dateQuestion: DateQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', dateQuestion);
  }
  
  delete(dateQuestion: DateQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', dateQuestion);
  }
}