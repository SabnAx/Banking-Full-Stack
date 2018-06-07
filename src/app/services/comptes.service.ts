import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Compte } from '../domain/compte';

@Injectable({
  providedIn: 'root'
})
export class ComptesService {

  url = 'http://localhost:8080/comptes';
  constructor(private _http: HttpClient) { }

  getAllComptes(): Observable<Compte[]> {
    return this._http.get<Compte[]>(this.url).pipe(
      tap(console.log)
    );
  }

  getCompteById(id: string): Observable<Compte> {
    return this._http.get<Compte>(this.url + '/' +  id);
  }

  deleteCompteById(id: string): Observable<any> {
    return this._http.delete(this.url + '/' +  id);
  }

  addCompte(compte: Compte): Observable<any> {
    return this._http.post(this.url, compte);
  }


}
