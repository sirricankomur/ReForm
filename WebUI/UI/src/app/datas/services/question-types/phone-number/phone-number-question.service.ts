import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PhoneNumberQuestion } from '@datas/models/question-types/phone-number-question';
import { ResponseModel } from '@datas/models/generics/response-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberQuestionService {
  private apiUrl = environment.apiUrl + 'phonenumberquestions/';

  constructor(private httpClient: HttpClient) {}

  getById(questionId: number) {
    let newPath = this.apiUrl + 'getbyid?id=' + questionId;
    return this.httpClient.get<SingleResponseModel<PhoneNumberQuestion>>(newPath);
  }

  create(phoneNumberQuestion: PhoneNumberQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', phoneNumberQuestion);
  }

  update(phoneNumberQuestion: PhoneNumberQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', phoneNumberQuestion);
  }

  delete(phoneNumberQuestion: PhoneNumberQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', phoneNumberQuestion);
  }
}
