import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailResponse } from '@datas/models/response-types/email-response';
import { ResponseModel } from '@datas/models/generics/response-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailResponseService {
  private apiUrl = environment.apiUrl + 'emailresponses/';

  constructor(private httpClient: HttpClient) {}

  getById(responseId: number) {
    let newPath = this.apiUrl + 'getbyid?id=' + responseId;
    return this.httpClient.get<SingleResponseModel<EmailResponse>>(newPath);
  }

  create(emailResponse: EmailResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', emailResponse);
  }

  update(emailResponse: EmailResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', emailResponse);
  }
  
  delete(emailResponse: EmailResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', emailResponse);
  }
}
