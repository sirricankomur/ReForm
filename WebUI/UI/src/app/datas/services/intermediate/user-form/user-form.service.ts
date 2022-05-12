import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '@datas/models/generics/response-model';
import { UserForm } from '@datas/models/intermediate/user-form';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserFormService {
  private apiUrl = environment.apiUrl + 'userforms/';

  constructor(private httpClient: HttpClient) { }

  create(userForm: UserForm): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', userForm);
  }
}
