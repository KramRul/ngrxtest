import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Credentials } from '../models/credentials';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: Credentials): Observable<User> {
    return this.http.get<User>("/login");
  }
}