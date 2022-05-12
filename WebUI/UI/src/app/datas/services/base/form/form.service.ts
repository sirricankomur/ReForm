import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@datas/models/base/form';
import { ListResponseModel } from '@datas/models/generics/list-response-model';
import { ResponseModel } from '@datas/models/generics/response-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private apiUrl = environment.apiUrl + 'forms/';
  
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Form>> {
    let newPath = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Form>>(newPath);
  }

  getForms(userId: number): Observable<ListResponseModel<Form>> {
    let newPath = this.apiUrl + 'getforms?userId=' + userId;
    return this.httpClient.get<ListResponseModel<Form>>(newPath);
  }

  getLastForm(): Observable<SingleResponseModel<Form>> {
    let newPath = this.apiUrl + 'getlastform';
    return this.httpClient.get<SingleResponseModel<Form>>(newPath);
  }

  getById(formId: number) {
    let newPath = this.apiUrl + 'getbyid?formId=' + formId;
    return this.httpClient.get<SingleResponseModel<Form>>(newPath);
  }

  getQuestionNumber(formId: number) {
    let newPath = this.apiUrl + 'getQuestionNumber?formId=' + formId;
    return this.httpClient.get<number>(newPath);
  }

  create(form: Form): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', form);
  }

  update(form: Form): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', form);
  }

  delete(form: Form): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', form);
  }
}
