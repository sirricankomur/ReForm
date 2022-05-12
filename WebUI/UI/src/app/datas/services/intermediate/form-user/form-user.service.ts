import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormUser } from '@datas/models/intermediate/form-user';
import { ListResponseModel } from '@datas/models/generics/list-response-model';
import { ResponseModel } from '@datas/models/generics/response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormUserService {
  private apiUrl = environment.apiUrl + 'formusers/';
  
  constructor(private httpClient: HttpClient) {}

  getAllByFormId(formId: number): Observable<ListResponseModel<FormUser>> {
    let newPath = this.apiUrl + 'getallbyformid?formId=' + formId;
    return this.httpClient.get<ListResponseModel<FormUser>>(newPath);
  }

  getAllByUserId(userId: number): Observable<ListResponseModel<FormUser>> {
    let newPath = this.apiUrl + 'getallbyuserid?userId=' + userId;
    return this.httpClient.get<ListResponseModel<FormUser>>(newPath);
  }

  getAll(): Observable<ListResponseModel<FormUser>> {
    let newPath = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<FormUser>>(newPath);
  }

  create(formUser: FormUser): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', formUser);
  }

  update(formUser: FormUser): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', formUser);
  }

  delete(formUser: FormUser): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', formUser);
  }
}
