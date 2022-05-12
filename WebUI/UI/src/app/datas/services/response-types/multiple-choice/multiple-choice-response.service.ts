import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MultipleChoiceResponse } from '@datas/models/response-types/multiple-choice-response';
import { ResponseModel } from '@datas/models/generics/response-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MultipleChoiceResponseService {
  private apiUrl = environment.apiUrl + 'multiplechoiceresponses/';

  constructor(private httpClient: HttpClient) {}

  getById(responseId: number) {
    let newPath = this.apiUrl + 'getbyid?id=' + responseId;
    return this.httpClient.get<SingleResponseModel<MultipleChoiceResponse>>(newPath);
  }

  create(multipleChoiceResponse: MultipleChoiceResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', multipleChoiceResponse);
  }

  update(multipleChoiceResponse: MultipleChoiceResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', multipleChoiceResponse);
  }
  
  delete(multipleChoiceResponse: MultipleChoiceResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', multipleChoiceResponse);
  }
}
