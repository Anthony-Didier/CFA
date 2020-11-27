import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Commande } from '../app/models/Commande';

@Injectable({
  providedIn: 'root',
})
export class CantiniereService {
  api_url = 'http://localhost:8080/lunchtime/';
  token =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiMTkgUlVFIERFIENBTFZBUyIsIndhbGxldCI6MTIuOTgsInBvc3RhbENvZGUiOiI1OTQ5MiIsInJlZ2lzdHJhdGlvbkRhdGUiOlsyMDIwLDcsMTIsMTEsNCwxXSwiZW1haWwiOiJ0b3RvQGdtYWlsLmNvbSIsImlzTHVuY2hMYWR5Ijp0cnVlLCJuYW1lIjoiRHVtYXMiLCJmaXJzdG5hbWUiOiJKZWFuIiwicGhvbmUiOiI5ODc0MTQwNTk5IiwidG93biI6IkhPWU1JTExFIiwic2V4IjoyLCJzdGF0dXMiOjAsImltYWdlSWQiOjF9LCJyb2xlcyI6WyJST0xFX0xVTkNITEFEWSJdLCJpc3MiOiJzZWN1cmUtYXBpIiwiYXVkIjoic2VjdXJlLWFwcCIsInN1YiI6InRvdG9AZ21haWwuY29tIiwiZXhwIjoxNjAzMTE5ODY3fQ.j-araqREHrebVOj_0QCSNYlj_Bz-chdyPN3vTVUzniW2Fhn16-FF1kk_SpOOgFXgz19Swz-YSAa-H72NLaef_Q';

  constructor(public http: HttpClient) {}

  findAll(): Observable<Commande[]> {
    return this.http.get<Commande[]>(this.api_url + 'order/findall');
  }

  findAllbyUser(id: number): Observable<Commande[]> {
    return this.http.get<Commande[]>(this.api_url + 'order/findallforuser/' + id);
  }

  update(commande: Commande) {
    return this.http.put(this.api_url + 'order/findall', commande.status = 2);
  }
}
