import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '@datas/models/base/question';
import { ResponseModel } from '@datas/models/generics/response-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiUrl = environment.apiUrl + 'questions/';

  constructor(private httpClient: HttpClient) {}

  create(question: Question): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', question);
  }

  update(question: Question): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', question);
  } 
  
  delete(question: Question): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', question);
  }

  getLastQuestion(): Observable<SingleResponseModel<Question>> {
    let newPath = this.apiUrl + 'getlastquestion';
    return this.httpClient.get<SingleResponseModel<Question>>(newPath);
  }

  getById(id: number): Observable<SingleResponseModel<Question>> {
    let newPath = this.apiUrl + 'getbyid?id='+id;
    return this.httpClient.get<SingleResponseModel<Question>>(newPath);
  }
}
