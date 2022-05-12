import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebsiteResponse } from '@datas/models/response-types/website-response';
import { ResponseModel } from '@datas/models/generics/response-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebsiteResponseService {
  private apiUrl = environment.apiUrl + 'websiteresponses/';

  constructor(private httpClient: HttpClient) {}

  getById(responseId: number) {
    let newPath = this.apiUrl + 'getbyid?id=' + responseId;
    return this.httpClient.get<SingleResponseModel<WebsiteResponse>>(newPath);
  }

  create(websiteResponse: WebsiteResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', websiteResponse);
  }

  update(websiteResponse: WebsiteResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', websiteResponse);
  }
  
  delete(websiteResponse: WebsiteResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', websiteResponse);
  }
}
