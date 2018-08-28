import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Armor } from '../armor/+state/armor.interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay, catchError, tap, map } from 'rxjs/operators';
import { Weapon } from '../weapons/+state/weapons.interfaces';
import { error } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'http://localhost:3000';
  headers: HttpHeaders = new HttpHeaders({'Accepts': 'application/json'});

  constructor(private _http: HttpClient) { }
  //#region Armor
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

  //#endregion armor

  getAllWeapons(): Observable<Weapon[]> {
    const url = `${this.baseUrl}/weapons`;
    return this._http.get<Weapon[]>(url).pipe(
      tap(() => console.log('getAllWeapons: getting all weapons')),
      catchError(err => throwError(err))
    );
  }

  getWeapon(id: number): Observable<Weapon> {
    const url = `${this.baseUrl}/weapons/${id}`;
    return this._http.get<Weapon>(url).pipe(
      tap(() => console.log('getWeapon: get specific weapon, id' + id)),
      catchError(err => throwError(err))
    );
  }

  createWeapon(weapon: Weapon): Observable<Weapon> {
    const url = `${this.baseUrl}/weapons/${weapon}`;
    return this._http.post<Weapon>(url, weapon, {headers: this.headers}).pipe(
      tap(() => console.log(`createWeapon: Creating Weapon: ${JSON.stringify(weapon)}`)),
      catchError(err => throwError(err))
    );
  }

  updateWeapon(weapon: Weapon): Observable<Weapon> {
    const url = `${this.baseUrl}/weapons/${weapon}`;
    return this._http.put<Weapon>(url, weapon, {headers: this.headers}).pipe(
      tap(() => console.log(`update weapon: ${JSON.stringify(weapon)}`)),
      catchError(err => throwError(err))
    );
  }

  deleteWeapon(id: number): Observable<void> {
    const url = `${this.baseUrl}/weapons/${id}`;
    return this._http.delete<void>(url).pipe(
      tap(() => console.log(`deleteWeapon: Deleting Weapon with id: ${id}`)),
      catchError(err => throwError(err))
    );
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
