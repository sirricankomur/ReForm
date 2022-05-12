import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailQuestion } from '@datas/models/question-types/email-question';
import { ResponseModel } from '@datas/models/generics/response-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailQuestionService {
  private apiUrl = environment.apiUrl + 'emailquestions/';

  constructor(private httpClient: HttpClient) {}

  getById(questionId: number) {
    let newPath = this.apiUrl + 'getbyid?id=' + questionId;
    return this.httpClient.get<SingleResponseModel<EmailQuestion>>(newPath);
  }

  create(emailQuestion: EmailQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', emailQuestion);
  }

  update(emailQuestion: EmailQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', emailQuestion);
  }

  delete(emailQuestion: EmailQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', emailQuestion);
  }
}
