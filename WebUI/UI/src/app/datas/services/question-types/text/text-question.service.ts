import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TextQuestion } from '@datas/models/question-types/text-question';
import { ResponseModel } from '@datas/models/generics/response-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TextQuestionService {
  private apiUrl = environment.apiUrl + 'textquestions/';

  constructor(private httpClient: HttpClient) {}

  getById(questionId: number) {
    let newPath = this.apiUrl + 'getbyid?id=' + questionId;
    return this.httpClient.get<SingleResponseModel<TextQuestion>>(newPath);
  }

  create(textQuestion: TextQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', textQuestion);
  }

  update(textQuestion: TextQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', textQuestion);
  }

  delete(textQuestion: TextQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', textQuestion);
  }
}
