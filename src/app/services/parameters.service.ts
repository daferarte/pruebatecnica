import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceConfig } from '../config/forms-config';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ParametersService {
  entity = 'registro'
  constructor(
    private http: HttpClient
  ) { }

  /**
   * metodo que llama el metodo post en el backend
   * @param user user es la data a guardar
   */
  UserRegister(user: UserModel): Observable<UserModel>{
      return this.http.post(`${ServiceConfig.BASE_URL}${this.entity}`, user, {
        headers: new HttpHeaders({

        })
      });
  }
}
