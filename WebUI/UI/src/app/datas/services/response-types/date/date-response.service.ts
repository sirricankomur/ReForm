import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DateResponse } from '@datas/models/response-types/date-response';
import { ResponseModel } from '@datas/models/generics/response-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DateResponseService {
  private apiUrl = environment.apiUrl + 'dateresponses/';

  constructor(private httpClient: HttpClient) {}

  getById(responseId: number) {
    let newPath = this.apiUrl + 'getbyid?id=' + responseId;
    return this.httpClient.get<SingleResponseModel<DateResponse>>(newPath);
  }

  create(dateResponse: DateResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', dateResponse);
  }

  update(dateResponse: DateResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', dateResponse);
  }
  
  delete(dateResponse: DateResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', dateResponse);
  }
}
