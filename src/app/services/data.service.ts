import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Armor } from '../armor/+state/armor.interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay, catchError, tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'http://localhost:3000';
  headers: HttpHeaders = new HttpHeaders({'Accepts': 'application/json'});

  constructor(private _http: HttpClient) { }

  getArmor(): Observable<Armor[]> {
    const url = `${this.baseUrl}/armor`;
    return this._http.get<Armor[]>(url).pipe(delay(500));
  }

  getArmorItem(id: number): Observable<Armor> {
    const url = `${this.baseUrl}/armor/${id}`;
    return this._http.get<Armor>(url);
  }

  createArmor(armor: Armor): Observable<Armor> {
    const url = `${this.baseUrl}/armor`;
    return this._http.post<Armor>(url, armor, {headers: this.headers})
      .pipe(
        tap(() => console.log('Creating new armor')),
        catchError(err => throwError(err))
      );
  }

  updateArmor(armor: Armor): Observable<Armor> {
    const url = `${this.baseUrl}/armor/${armor.id}`;
    return this._http.put<Armor>(url, armor, {headers: this.headers})
      .pipe (
        tap(() => console.log('Update initiated...')),
        map(() => armor),
        catchError(err => throwError(err))
      );
  }

  deleteArmor(id: number): Observable<void> {
    const url = `${this.baseUrl}/armor/${id}`;
    return this._http.delete<void>(url);
  }

  private handleError(err) {
    // let errorMessage: string;
    // if (err.error instanceof ErrorEvent) {
    //   errorMessage = `An error occurred: ${err.error.message}`;
    // } else {
    //   errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    // }
    // console.error(err);
    return throwError(err.message);
  }



}
