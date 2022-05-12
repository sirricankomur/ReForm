import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PhoneNumberResponse } from '@datas/models/response-types/phone-number-response';
import { ResponseModel } from '@datas/models/generics/response-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberResponseService {
  private apiUrl = environment.apiUrl + 'phonenumberresponses/';

  constructor(private httpClient: HttpClient) {}

  getById(responseId: number) {
    let newPath = this.apiUrl + 'getbyid?id=' + responseId;
    return this.httpClient.get<SingleResponseModel<PhoneNumberResponse>>(newPath);
  }

  create(phoneNumberResponse: PhoneNumberResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', phoneNumberResponse);
  }

  update(phoneNumberResponse: PhoneNumberResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', phoneNumberResponse);
  }
  
  delete(phoneNumberResponse: PhoneNumberResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', phoneNumberResponse);
  }
}
