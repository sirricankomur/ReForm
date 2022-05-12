import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '@datas/models/auth/login-model';
import { RegisterModel } from '@datas/models/auth/register-model';
import { TokenModel } from '@datas/models/auth/token-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl + 'auth/';
  constructor(private httpClient: HttpClient) {}

  login(loginModel: LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiUrl + 'login',
      loginModel
    );
  }

  register(registerModel: RegisterModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiUrl + 'register',
      registerModel
    );
  }
  isAuthenticated() {
    return localStorage.getItem('token');
  }
}
