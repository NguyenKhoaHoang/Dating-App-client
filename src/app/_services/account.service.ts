import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AuthUser, UserToken } from '../_models/app-user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  baseUrl = 'https://localhost:7039/api/Auth/';
  private currentUser = new BehaviorSubject<UserToken | null>(null);

  currentUser$ = this.currentUser.asObservable();

  constructor(private httpClient: HttpClient) { }

  login(authUser: AuthUser): Observable<any> {
    return this.httpClient.post<UserToken>(`${this.baseUrl}login`, authUser, this.httpOption)
      .pipe(
        map((response: UserToken) => {
          if (response) {
            localStorage.setItem('userToken', JSON.stringify(response));
            this.currentUser.next(response);
          }
        })
      );
  }

  logout() {
    this.currentUser.next(null);
    localStorage.removeItem("userToken");
  }

  relogin() {
    const stogareUser = localStorage.getItem('userToken');
    if (stogareUser) {
      const userToken = JSON.parse(stogareUser);
      this.currentUser.next(userToken);
    }
  }

  register() {}
}
