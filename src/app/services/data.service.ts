import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Armor } from '../armor/+state/armor.interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'http://localhost:3000';
  headers = new HttpHeaders({'Accepts': 'application/json'});

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
    return this._http.post<Armor>(url, armor, {headers: this.headers});
  }

  updateArmor(armor: Armor): Observable<Armor> {
    const url = `${this.baseUrl}/armor`;
    return this._http.put<Armor>(url, armor, {headers: this.headers});
  }

  deletaArmor(id: number): Observable<void> {
    const url = `${this.baseUrl}/armor/${id}`;
    return this._http.delete<void>(url);
  }

}
