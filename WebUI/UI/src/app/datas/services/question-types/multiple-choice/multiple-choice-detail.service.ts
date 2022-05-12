import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MultipleChoiceDetail } from '@datas/models/details/multiple-choice-detail';
import { ListResponseModel } from '@datas/models/generics/list-response-model';
import { ResponseModel } from '@datas/models/generics/response-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MultipleChoiceDetailService {
  private apiUrl = environment.apiUrl + 'multiplechoicedetails/';

  constructor(private httpClient: HttpClient) {}

  getById(questionId: number) {
    let newPath = this.apiUrl + 'getbyid?id=' + questionId;
    return this.httpClient.get<SingleResponseModel<MultipleChoiceDetail>>(newPath);
  }

  getMultipleChoices(questionId: number): Observable<ListResponseModel<MultipleChoiceDetail>> {
    let newPath = this.apiUrl + 'getmultiplechoices?questionId=' + questionId;
    return this.httpClient.get<ListResponseModel<MultipleChoiceDetail>>(newPath);
  }

  getLastMultipleChoiceDetail(): Observable<SingleResponseModel<MultipleChoiceDetail>> {
    let newPath = this.apiUrl + 'getlastmultiplechoicedetail';
    return this.httpClient.get<SingleResponseModel<MultipleChoiceDetail>>(newPath);
  }

  create(multipleChoiceDetail: MultipleChoiceDetail): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', multipleChoiceDetail);
  }

  update(multipleChoiceDetail: MultipleChoiceDetail): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', multipleChoiceDetail);
  }

  delete(multipleChoiceDetail: MultipleChoiceDetail): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', multipleChoiceDetail);
  }
}
