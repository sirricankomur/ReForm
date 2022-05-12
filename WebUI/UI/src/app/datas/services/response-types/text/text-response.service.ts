import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TextResponse } from '@datas/models/response-types/text-response';
import { ResponseModel } from '@datas/models/generics/response-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TextResponseService {
  private apiUrl = environment.apiUrl + 'textresponses/';

  constructor(private httpClient: HttpClient) {}

  getById(responseId: number) {
    let newPath = this.apiUrl + 'getbyid?id=' + responseId;
    return this.httpClient.get<SingleResponseModel<TextResponse>>(newPath);
  }

  create(textResponse: TextResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', textResponse);
  }

  update(textResponse: TextResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', textResponse);
  }
  
  delete(textResponse: TextResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', textResponse);
  }
}
