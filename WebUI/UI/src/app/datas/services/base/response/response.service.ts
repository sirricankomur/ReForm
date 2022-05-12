import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '@datas/models/base/response';
import { ListResponseModel } from '@datas/models/generics/list-response-model';
import { ResponseModel } from '@datas/models/generics/response-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  private apiUrl = environment.apiUrl + 'responses/';

  constructor(private httpClient: HttpClient) {}

  create(response: Response): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', response);
  }

  update(response: Response): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', response);
  } 
  
  delete(response: Response): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', response);
  }

  getById(id: number): Observable<SingleResponseModel<Response>> {
    let newPath = this.apiUrl + 'getbyid?id='+id;
    return this.httpClient.get<SingleResponseModel<Response>>(newPath);
  }

  getAllByFormId(formId: number): Observable<ListResponseModel<Response>> {
    let newPath = this.apiUrl + 'getallbyformid?formId=' + formId;
    return this.httpClient.get<ListResponseModel<Response>>(newPath);
  }

  getLastResponse(): Observable<SingleResponseModel<Response>> {
    let newPath = this.apiUrl + 'getlastresponse';
    return this.httpClient.get<SingleResponseModel<Response>>(newPath);
  }

  getLastResponses(limit: number): Observable<SingleResponseModel<Response>> {
    let newPath = this.apiUrl + 'getlastresponses?limit='+limit;
    return this.httpClient.get<SingleResponseModel<Response>>(newPath);
  }
}
