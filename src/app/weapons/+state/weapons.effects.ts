import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as weaponActions from './weapons.action';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import { Store, Action } from '@ngrx/store';
import { WeaponState, Weapon } from './weapons.interfaces';
import { of, Observable, pipe } from 'rxjs';


@Injectable()
export class WeaponsEffects {

  constructor(private actions$: Actions, private svc: DataService, private store: Store<WeaponState>) {}

  @Effect()
  loadWeapons$: Observable<Action> = this.actions$.pipe(
    ofType(weaponActions.WeaponsActionTypes.LOAD_WEAPONS),
    mergeMap((action: weaponActions.LoadWeapons) => this.svc.getAllWeapons()
     .pipe(
       map((weapons: Weapon[]) => (new weaponActions.LoadWeaponsSuccess(weapons))),
       catchError(err => of(new weaponActions.LoadWeaponsFail(err.message)))
     ))
  );

  @Effect()
  createWeapon$: Observable<Action> = this.actions$.pipe(
    ofType(weaponActions.WeaponsActionTypes.CREATE_WEAPON),
    map((action: weaponActions.CreateWeapon) => action.payload),
    mergeMap((payload: Weapon) => this.svc.createWeapon(payload)
      .pipe(
        map((weapon: Weapon) => (new weaponActions.CreateWeaponSuccess(weapon))),
        catchError(err => of(new weaponActions.CreateWeaponFail(err)))
      ))
  );

  @Effect()
  updateWeapon$: Observable<Action> = this.actions$.pipe(
    ofType(weaponActions.WeaponsActionTypes.UPDATE_WEAPON),
    map((action: weaponActions.UpdateWeapon) => action.payload),
    mergeMap((payload: Weapon) => this.svc.updateWeapon(payload)
      .pipe(
        map((weapon: Weapon) => (new weaponActions.UpdateWeaponSuccess(weapon))),
        catchError(err => of(new weaponActions.UpdateWeaponFail(err.message)))
      )
  ));

  @Effect()
  $deleteWeapon: Observable<Action> = this.actions$.pipe(
    ofType(weaponActions.WeaponsActionTypes.DELETE_WEAPON),
    map((action: weaponActions.DeleteWeapon) => action.payload),
    mergeMap((payload: number) => this.svc.deleteWeapon(payload)
      .pipe(
        map((res: void) => (new weaponActions.DeleteWeaponSuccess(payload))),
        catchError(err => of(new weaponActions.DeleteWeaponFail(err)))
      ))
  );

}
