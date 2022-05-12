import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RankingResponse } from '@datas/models/response-types/ranking-response';
import { ResponseModel } from '@datas/models/generics/response-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RankingResponseService {
  private apiUrl = environment.apiUrl + 'rankingresponses/';

  constructor(private httpClient: HttpClient) {}

  getById(responseId: number) {
    let newPath = this.apiUrl + 'getbyid?id=' + responseId;
    return this.httpClient.get<SingleResponseModel<RankingResponse>>(newPath);
  }

  create(rankingResponse: RankingResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', rankingResponse);
  }

  update(rankingResponse: RankingResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', rankingResponse);
  }
  
  delete(rankingResponse: RankingResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', rankingResponse);
  }
}
