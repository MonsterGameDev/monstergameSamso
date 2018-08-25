import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataService } from '../../services/data.service';
import * as armorActions from './armor.actions';
import { mergeMap, map, catchError} from 'rxjs/operators';
import { Armor } from './armor.interfaces';
import { of } from 'rxjs';


@Injectable()
export class ArmorEffects {

  constructor(private actions$: Actions, private svc: DataService) {}

  @Effect()
  loadArmors$ = this.actions$.pipe(
    ofType(armorActions.ArmorActionTypes.LOAD_ARMORS),
    mergeMap((action: armorActions.LoadArmor) => this.svc.getArmor()
      .pipe(
        map((armors: Armor[]) => new armorActions.LoadArmorsSuccess(armors)),
        catchError ((err: any) => of(new armorActions.LoadArmorsFail(err)))
      )
    )
  );


}
