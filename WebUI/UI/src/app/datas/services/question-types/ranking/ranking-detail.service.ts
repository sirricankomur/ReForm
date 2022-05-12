import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RankingDetail } from '@datas/models/details/ranking-detail';
import { ListResponseModel } from '@datas/models/generics/list-response-model';
import { ResponseModel } from '@datas/models/generics/response-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RankingDetailService {
  private apiUrl = environment.apiUrl + 'rankingdetails/';

  constructor(private httpClient: HttpClient) {}

  getById(questionId: number) {

    let newPath = this.apiUrl + 'getbyid?id=' + questionId;
    return this.httpClient.get<SingleResponseModel<RankingDetail>>(newPath);
  }

  getRankingChoices(questionId: number): Observable<ListResponseModel<RankingDetail>> {
    let newPath = this.apiUrl + 'getrankingchoices?questionId=' + questionId;
    return this.httpClient.get<ListResponseModel<RankingDetail>>(newPath);
  }

  create(rankingDetail: RankingDetail): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', rankingDetail);
  }

  update(rankingDetail: RankingDetail): Observable<ResponseModel> {

    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', rankingDetail);
  }

  delete(rankingDetail: RankingDetail): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', rankingDetail);
  }
}
