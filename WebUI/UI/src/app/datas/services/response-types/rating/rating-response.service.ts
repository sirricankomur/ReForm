import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RatingResponse } from '@datas/models/response-types/rating-response';
import { ResponseModel } from '@datas/models/generics/response-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RatingResponseService {
  private apiUrl = environment.apiUrl + 'ratingresponses/';

  constructor(private httpClient: HttpClient) {}

  getById(responseId: number) {
    let newPath = this.apiUrl + 'getbyid?id=' + responseId;
    return this.httpClient.get<SingleResponseModel<RatingResponse>>(newPath);
  }

  create(ratingResponse: RatingResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', ratingResponse);
  }

  update(ratingResponse: RatingResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', ratingResponse);
  }
  
  delete(ratingResponse: RatingResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', ratingResponse);
  }
}
