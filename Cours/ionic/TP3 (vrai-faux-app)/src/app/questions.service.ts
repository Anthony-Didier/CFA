import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Question } from "./home/Question";

const API = "http://localhost:3000/questions"

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Question[]> {
    return this.http.get<Question[]>(API);
  }
}
