import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AuthLogin, AuthRegister, User} from "../models/auth.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {
  }

  authLogin(loginRequest: AuthLogin): Observable<User> {
    return this.http.post<User>(this.baseApiUrl + '/api/users/login', loginRequest);
  }

  authRegister(registerRequest: AuthRegister) {
    return this.http.post(this.baseApiUrl + '/api/users/register', registerRequest);
  }
}
