import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataService } from '../../services/data.service';
import * as potionsActions from './potions.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Potion } from './potions.interfaces';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';


@Injectable()
export class PotionEffects {

  constructor(private actions$: Actions, private svc: DataService) {}

  @Effect()
  loadPotions$: Observable<Action> = this.actions$.pipe(
    ofType(potionsActions.PotionsActionTypes.LOAD_POTIONS),
    mergeMap(() => this.svc.getAllPotions().pipe(
      map((res: Potion[]) => (new potionsActions.LoadPotionsSuccess(res))),
      catchError(err => of(new potionsActions.LoadPotionsFail(err.message)))
    ))
  );

  @Effect()
  createPotion$: Observable<Action> = this.actions$.pipe(
    ofType(potionsActions.PotionsActionTypes.CREATE_POTION),
    map((action: potionsActions.CreatePotion) => action.payload),
    mergeMap((payload: Potion) => this.svc.createPotion(payload).pipe(
      map((potion: Potion) => (new potionsActions.CreatePotion(potion))),
      catchError(err => of(new potionsActions.CreatePotionFail(err.message)))
    ))
  );

  @Effect()
  updatePotion$: Observable<Action> = this.actions$.pipe(
    ofType(potionsActions.PotionsActionTypes.UPDATE_POTION),
    map((action: potionsActions.UpdatePotion) => action.payload),
    mergeMap((payload: Potion) => this.svc.updatePotion(payload).pipe(
      map((potion: Potion) => (new potionsActions.UpdatePotion(potion))),
      catchError(err => of(new potionsActions.UpdatePotionFail(err.message)))
    ))
  );

  @Effect()
  deletePotion$: Observable<Action> = this.actions$.pipe(
    ofType(potionsActions.PotionsActionTypes.DELETE_POTION),
    map((action: potionsActions.DeletePotion) => action.payload),
    mergeMap((payload: number) => this.svc.deletePotion(payload).pipe(
      map((res: void) => (new potionsActions.DeletePotionSuccess(payload))),
      catchError(err => of(new potionsActions.DeletePotionFail(err.message)))
    ))
  );
}
