import { Injectable } from '@angular/core';
import { Armor } from '../armor/+state/armor.interfaces';
import { Weapon } from '../weapons/+state/weapons.interfaces';
import { Potion } from '../potions/+state/potions.interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay, catchError, tap, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


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
    const url = `${this.baseUrl}/weapons`;
    return this._http.post<Weapon>(url, weapon, {headers: this.headers}).pipe(
      tap(() => console.log(`createWeapon: Creating Weapon: ${JSON.stringify(weapon)}`)),
      catchError(err => throwError(err))
    );
  }

  updateWeapon(weapon: Weapon): Observable<Weapon> {
    const url = `${this.baseUrl}/weapons`;
    return this._http.put<Weapon>(url, weapon, {headers: this.headers}).pipe(
      tap(() => console.log(`update weapon: ${JSON.stringify(weapon)}`)),
      map(() => weapon),
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

// Potions
  getAllPotions(): Observable<Potion[]> {
    const url = `${this.baseUrl}/potion`;
    return this._http.get<Potion[]>(url).pipe(
      tap(() => console.log(`Getting all Potions`)),
      catchError(err => throwError(err))
    );
  }

  getPotion(id: number): Observable<Potion> {
    const url = `${this.baseUrl}/potion/${id}`;
    return this._http.get<Potion>(url).pipe(
      tap(() => console.log(`Getting all Potions`)),
      catchError(err => throwError(err))
    );
  }

  createPotion(potion: Potion): Observable<Potion> {
    const url = `${this.baseUrl}/potion`;
    return this._http.post<Potion>(url, potion, {headers: this.headers}).pipe(
      tap(() => console.log(`Getting all Potions`)),
      catchError(err => throwError(err))
    );
  }

  updatePotion(potion: Potion): Observable<Potion> {
    const url = `${this.baseUrl}/potion`;
    return this._http.put<Potion>(url, potion, {headers: this.headers}).pipe(
      tap(() => console.log(`Getting all Potions`)),
      catchError(err => throwError(err))
    );
  }

  deletePotion(id: number): Observable<void> {
    const url = `${this.baseUrl}/potion/${id}`;
    return this._http.delete<void>(url).pipe(
      tap(() => console.log(`Getting all Potions`)),
      catchError(err => throwError(err))
    );
  }
}
