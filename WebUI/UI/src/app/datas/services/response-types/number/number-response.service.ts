import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NumberResponse } from '@datas/models/response-types/number-response';
import { ResponseModel } from '@datas/models/generics/response-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NumberResponseService {
  private apiUrl = environment.apiUrl + 'numberresponses/';

  constructor(private httpClient: HttpClient) {}

  getById(responseId: number) {
    let newPath = this.apiUrl + 'getbyid?id=' + responseId;
    return this.httpClient.get<SingleResponseModel<NumberResponse>>(newPath);
  }

  create(numberResponse: NumberResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'create',
      numberResponse
    );
  }

  update(numberResponse: NumberResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'update',
      numberResponse
    );
  }

  delete(numberResponse: NumberResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'delete',
      numberResponse
    );
  }
}
