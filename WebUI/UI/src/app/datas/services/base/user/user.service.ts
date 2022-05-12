import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDto } from '@datas/models/dto/user-dto';
import { ListResponseModel } from '@datas/models/generics/list-response-model';
import { ResponseModel } from '@datas/models/generics/response-model';
import { SingleResponseModel } from '@datas/models/generics/single-response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl + 'users/';

  constructor(private httpClient: HttpClient) { }

  getUserByEmail(email: string): Observable<SingleResponseModel<UserDto>> {
      let newPath = this.apiUrl + 'getbyuserdetail?email='+email;
      return this.httpClient.get<SingleResponseModel<UserDto>>(newPath);
  }

  create(user: UserDto): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'create', user);
  }

  update(user: UserDto): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', user);
  } 
  
  delete(user: UserDto): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', user);
  }

  getById(id: number): Observable<SingleResponseModel<UserDto>> {
    let newPath = this.apiUrl + 'getbyid?id='+id;
    return this.httpClient.get<SingleResponseModel<UserDto>>(newPath);
  }

  getAll(): Observable<ListResponseModel<UserDto>> {
    let newPath = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<UserDto>>(newPath);
  }
}

