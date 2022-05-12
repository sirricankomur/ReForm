import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '@datas/models/generics/response-model';
import { UserResponse } from '@datas/models/intermediate/user-response';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserResponseService {
  private apiUrl = environment.apiUrl + 'userresponses/';

  constructor(private httpClient: HttpClient) { }

  create(userResponse: UserResponse): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', userResponse);
  }
}
