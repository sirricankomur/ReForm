import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OpinionScaleResponse } from '@datas/models/response-types/opinion-scale-response';
import { ResponseModel } from '@datas/models/generics/response-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpinionScaleResponseService {
  private apiUrl = environment.apiUrl + 'opinionscaleresponses/';

  constructor(private httpClient: HttpClient) {}

  getById(responseId: number) {
    let newPath = this.apiUrl + 'getbyid?id=' + responseId;
    return this.httpClient.get<SingleResponseModel<OpinionScaleResponse>>(newPath);
  }

  create(opinionScaleResponse: OpinionScaleResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', opinionScaleResponse);
  }

  update(opinionScaleResponse: OpinionScaleResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', opinionScaleResponse);
  }
  
  delete(opinionScaleResponse: OpinionScaleResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', opinionScaleResponse);
  }
}
