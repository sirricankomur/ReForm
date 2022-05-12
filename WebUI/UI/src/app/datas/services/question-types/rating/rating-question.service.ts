import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RatingQuestion } from '@datas/models/question-types/rating-question';
import { ResponseModel } from '@datas/models/generics/response-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RatingQuestionService {
  private apiUrl = environment.apiUrl + 'ratingquestions/';

  constructor(private httpClient: HttpClient) {}

  getById(questionId: number) {
    let newPath = this.apiUrl + 'getbyid?id=' + questionId;
    return this.httpClient.get<SingleResponseModel<RatingQuestion>>(newPath);
  }

  create(ratingQuestion: RatingQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', ratingQuestion);
  }

  update(ratingQuestion: RatingQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', ratingQuestion);
  }
  
  delete(ratingQuestion: RatingQuestion): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', ratingQuestion);
  }
}
