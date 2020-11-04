import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<User[]> {
      return this.http.get<User[]>("http://localhost:3000/users");
  }

  save(user: User): Observable<User> {
      return this.http.post<User>("http://localhost:3000/users", user);
  }

  delete(id: number): Promise<any> {
      return fetch("http://localhost:3000/users/$(id)", {
          method: "DELETE"
      })
  }
}
