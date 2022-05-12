import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebsiteQuestion } from '@datas/models/question-types/website-question';
import { ResponseModel } from '@datas/models/generics/response-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebsiteQuestionService {
  private apiUrl = environment.apiUrl + 'websitequestions/';

  constructor(private httpClient: HttpClient) {}

  getById(questionId: number) {
    let newPath = this.apiUrl + 'getbyid?id=' + questionId;
    return this.httpClient.get<SingleResponseModel<WebsiteQuestion>>(newPath);
  }

  create(websiteQuestion: WebsiteQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', websiteQuestion);
  }

  update(websiteQuestion: WebsiteQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', websiteQuestion);
  }

  delete(websiteQuestion: WebsiteQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', websiteQuestion);
  }
}
