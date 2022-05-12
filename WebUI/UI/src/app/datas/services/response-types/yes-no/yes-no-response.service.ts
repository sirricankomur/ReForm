import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { YesNoResponse } from '@datas/models/response-types/yes-no-response';
import { ResponseModel } from '@datas/models/generics/response-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YesNoResponseService {
  private apiUrl = environment.apiUrl + 'yesnoresponses/';

  constructor(private httpClient: HttpClient) {}

  getById(responseId: number) {
    let newPath = this.apiUrl + 'getbyid?id=' + responseId;
    return this.httpClient.get<SingleResponseModel<YesNoResponse>>(newPath);
  }

  create(yesNoResponse: YesNoResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', yesNoResponse);
  }

  update(yesNoResponse: YesNoResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', yesNoResponse);
  }
  
  delete(yesNoResponse: YesNoResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', yesNoResponse);
  }
}
