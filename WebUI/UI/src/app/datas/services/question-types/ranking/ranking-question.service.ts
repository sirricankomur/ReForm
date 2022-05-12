import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RankingQuestion } from '@datas/models/question-types/ranking-question';
import { ResponseModel } from '@datas/models/generics/response-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RankingQuestionService {
  private apiUrl = environment.apiUrl + 'rankingquestions/';

  constructor(private httpClient: HttpClient) {}

  getById(questionId: number) {
    let newPath = this.apiUrl + 'getbyid?id=' + questionId;
    return this.httpClient.get<SingleResponseModel<RankingQuestion>>(newPath);
  }

  create(rankingQuestion: RankingQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', rankingQuestion);
  }

  update(rankingQuestion: RankingQuestion): Observable<ResponseModel> {    
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', rankingQuestion);
  }

  delete(rankingQuestion: RankingQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', rankingQuestion);
  }
}
