import { Action } from '@ngrx/store';
import { Potion } from './potions.interfaces';
import { DeleteArmor } from '../../armor/+state/armor.actions';

export enum PotionsActionTypes {
  LOAD_POTIONS = '[Potions] Load Potions',
  LOAD_POTIONS_SUCCESS = '[Potions] Load Potions Success',
  LOAD_POTIONS_FAIL = '[Potions] Load Potions Fail',
  CREATE_POTION = '[Potion] Create Potion',
  CREATE_POTION_SUCCESS = '[Potion] Create Potion Success',
  CREATE_POTION_FAIL = '[Potion] Create Potion Fail',
  UPDATE_POTION = '[Potion] Update Potion',
  UPDATE_POTION_SUCCESS = '[Potion] Update Potion Success',
  UPDATE_POTION_FAIL = '[Potion] Update Potion Fail',
  DELETE_POTION = '[Potion] Delete Potion',
  DELETE_POTION_SUCCESS = '[Potion] Delete Potion Success',
  DELETE_POTION_FAIL = '[Potion] Delete Potion Fail',
  SET_SELECTED_POTION = '[Potion] Set Selected Potion',
  CLEAR_SELECTED_POTION = '[Potion] Clear Selected Potion',
  TOGGLE_SHOW_DETAILS = '[Potion] Toggle Show Details',
  INITIALIZE_SELECTED_POTION = '[Potion] Initialize Selected Potion'
}

export class LoadPotions implements Action {
  readonly type = PotionsActionTypes.LOAD_POTIONS;
}

export class LoadPotionsSuccess implements Action {
  readonly type = PotionsActionTypes.LOAD_POTIONS_SUCCESS;
  constructor(public payload: Potion[]) {}
}

export class LoadPotionsFail implements Action {
  readonly type = PotionsActionTypes.LOAD_POTIONS_FAIL;
  constructor(public payload: string) {}
}

export class CreatePotion implements Action {
  readonly type = PotionsActionTypes.CREATE_POTION;
  constructor(public payload: Potion) {}
}

export class CreatePotionSuccess implements Action {
  readonly type = PotionsActionTypes.CREATE_POTION_SUCCESS;
  constructor(public payload: Potion) {}
}

export class CreatePotionFail implements Action {
  readonly type = PotionsActionTypes.CREATE_POTION_FAIL;
  constructor(public payload: string) {}
}

export class UpdatePotion implements Action {
  readonly type = PotionsActionTypes.UPDATE_POTION;
  constructor(public payload: Potion) {}
}

export class UpdatePotionSuccess implements Action {
  readonly type = PotionsActionTypes.UPDATE_POTION_SUCCESS;
  constructor(public payload: Potion) {}
}

export class UpdatePotionFail implements Action {
  readonly type = PotionsActionTypes.UPDATE_POTION_FAIL;
  constructor(public payload: string) {}
}

export class DeletePotion implements Action {
  readonly type = PotionsActionTypes.DELETE_POTION;
  constructor(public payload: number) {}
}

export class DeletePotionSuccess implements Action {
  readonly type = PotionsActionTypes.DELETE_POTION_SUCCESS;
  constructor(public payload: number) {}
}

export class DeletePotionFail implements Action {
  readonly type = PotionsActionTypes.DELETE_POTION_FAIL;
  constructor(public payload: string) {}
}

export class SetSelectedPotion implements Action {
  readonly type = PotionsActionTypes.SET_SELECTED_POTION;
  constructor(public payload: number) {}
}

export class ClearSelectedPotion implements Action {
  readonly type = PotionsActionTypes.CLEAR_SELECTED_POTION;
}

export class InitializeSelectedPotion implements Action {
  readonly type = PotionsActionTypes.INITIALIZE_SELECTED_POTION;
}

export class ToggleShowDetails implements Action {
  readonly type = PotionsActionTypes.TOGGLE_SHOW_DETAILS;
  constructor(public payload: boolean) {}
}


export type PotionsActions =
  LoadPotions
  | LoadPotionsSuccess
  | LoadPotionsFail
  | CreatePotion
  | CreatePotionSuccess
  | CreatePotionFail
  | UpdatePotion
  | UpdatePotionSuccess
  | UpdatePotionFail
  | DeletePotion
  | DeletePotionSuccess
  | DeletePotionFail
  | InitializeSelectedPotion
  | SetSelectedPotion
  | ClearSelectedPotion
  | ToggleShowDetails
  ;
