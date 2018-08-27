import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { DataService } from '../../services/data.service';
import * as armorActions from './armor.actions';
import { mergeMap, map, catchError} from 'rxjs/operators';
import { Armor } from './armor.interfaces';
import { of, Observable } from 'rxjs';
import {  } from 'rxjs/internal/scheduler/Action';


@Injectable()
export class ArmorEffects {

  constructor(private actions$: Actions, private svc: DataService) {}

  @Effect()
  loadArmors$: Observable<Action> = this.actions$.pipe(
    ofType(armorActions.ArmorActionTypes.LOAD_ARMORS),
    mergeMap((action: armorActions.LoadArmor) => this.svc.getArmor()
      .pipe(
        map((armors: Armor[]) => new armorActions.LoadArmorsSuccess(armors)),
        catchError ((err: any) => of(new armorActions.LoadArmorsFail(err)))
      )
    )
  );

  @Effect()
  editArmor$: Observable<Action> = this.actions$.pipe(
    ofType(armorActions.ArmorActionTypes.EDIT_ARMOR),
    map((action: armorActions.EditArmor) => action.payload),
    mergeMap((payload: Armor) => this.svc.updateArmor(payload)
      .pipe(
        map((res: Armor) => (new armorActions.EditArmorSuccess(res))),
        catchError(err => of(new armorActions.EditArmorFail(err.message)))
      )
    )
  );

  @Effect()
  saveArmor$: Observable<Action> = this.actions$.pipe(
    ofType(armorActions.ArmorActionTypes.SAVE_ARMOR),
    map((action: armorActions.CreateArmor) => action.payload),
    mergeMap((payload: Armor) => this.svc.createArmor(payload)
      .pipe(
        map((armor: Armor) => (new armorActions.CreateArmorSuccess(armor))),
        catchError(err => of(new armorActions.CreateArmorFail('Save Armor Error: ' + err.message)))
      )
    )
  );


}
