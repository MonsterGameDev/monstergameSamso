import { Action } from '@ngrx/store';
import { Armor } from './armor.interfaces';

export enum ArmorActionTypes {
  LOAD_ARMORS = '[Armor] Load Armors',
  LOAD_ARMORS_SUCCESS = '[Armor] Load Armors Success',
  LOAD_ARMORS_FAIL = '[Armor] Load Armors Fail',
  LOAD_ARMOR = '[Armor] Load Item',
  LOAD_ARMOR_SUCCESS = '[Armor] Load Item Success',
  LOAD_ARMOR_FAIL = '[Armor] Load Item Fail',
  EDIT_ARMOR = '[Armor] Edit Armor',
  EDIT_ARMOR_SUCCESS = '[Armor] Edit Armor Success',
  EDIT_ARMOR_FAIL = '[Armor] Edit Armor Fail',
  DELETE_ARMOR = '[Armor] Delete Armor',
  DELETE_ARMOR_SUCCESS = '[Armor] Delete Success',
  DELETE_ARMOR_FAIL = '[Armor] Delete Fail',
  SET_SELECTED_ARMOR = '[Armor] Set Selected Armor',
  CLEAR_SELECTED_ARMOR = '[Armor] Clear Selected Armor',
  INITIALIZE_SELECTED_ARMOR = '[Armor] Initialize Selected Armor'
}

export class LoadArmors implements Action {
  readonly type = ArmorActionTypes.LOAD_ARMORS;
}

export class LoadArmorsSuccess implements Action {
  readonly type = ArmorActionTypes.LOAD_ARMORS_SUCCESS;
  constructor(public payload: Armor[]) {}
}

export class LoadArmorsFail implements Action {
  readonly type = ArmorActionTypes.LOAD_ARMORS_FAIL;
  constructor(public payload: string) {}
}

export class LoadArmor implements Action {
  readonly type = ArmorActionTypes.LOAD_ARMOR;
  constructor(public payload: number) {}
}

export class LoadArmorSuccess implements Action {
  readonly type = ArmorActionTypes.LOAD_ARMOR_SUCCESS;
  constructor(public payload: Armor) {}
}

export class LoadArmorFail implements Action {
  readonly type = ArmorActionTypes.LOAD_ARMOR_FAIL;
  constructor(public payload: string) {}
}

export class EditArmor implements Action {
  readonly type = ArmorActionTypes.EDIT_ARMOR;
  constructor(public payload: Armor) {}
}

export class EditArmorSuccess implements Action {
  readonly type = ArmorActionTypes.EDIT_ARMOR_SUCCESS;
  constructor(public payload: Armor) {}
}

export class EditArmorFail implements Action {
  readonly type = ArmorActionTypes.EDIT_ARMOR_FAIL;
  constructor(public payload: string) {}
}

export class DeleteArmor implements Action {
  readonly type = ArmorActionTypes.DELETE_ARMOR;
  constructor(public payload: number) {}
}

export class DeleteArmorSuccess implements Action {
  readonly type = ArmorActionTypes.DELETE_ARMOR_SUCCESS;
}

export class DeleteArmorFail implements Action {
  readonly type = ArmorActionTypes.DELETE_ARMOR_FAIL;
  constructor(public payload: string) {}
}

export class SetSelectedArmor implements Action {
  readonly type = ArmorActionTypes.SET_SELECTED_ARMOR;
  constructor(public payload: number) {}
}

export class ClearSelectedArmor implements Action {
  readonly type = ArmorActionTypes.CLEAR_SELECTED_ARMOR;
}

export class InitializeSelectedArmor implements Action {
  readonly type = ArmorActionTypes.INITIALIZE_SELECTED_ARMOR;
}

export type ArmorActions =
  LoadArmors
  | LoadArmorsSuccess
  | LoadArmorsFail
  | LoadArmor
  | LoadArmorSuccess
  | LoadArmorFail
  | EditArmor
  | EditArmorSuccess
  | EditArmorFail
  | DeleteArmor
  | DeleteArmorSuccess
  | DeleteArmorFail
  | SetSelectedArmor
  | ClearSelectedArmor
  | InitializeSelectedArmor
  ;
