import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Member } from '../_models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  baseUrl = "https://localhost:7039/api/members";
  constructor(private httpClient: HttpClient) { }

  getMembers(): Observable<Member[]> {
    return this.httpClient.get<Member[]>(this.baseUrl);
  }

  getMemberByUsername(username: string): Observable<Member>{
    return this.httpClient.get<Member>(`${this.baseUrl}/${username}`);
  }
}
