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
  SAVE_ARMOR = '[Armor] Save Armor',
  SAVE_ARMOR_SUCCESS = '[Armor] Save Armor Success',
  SAVE_ARMOR_FAIL = '[Armor] Save Armor Fail',
  DELETE_ARMOR = '[Armor] Delete Armor',
  DELETE_ARMOR_SUCCESS = '[Armor] Delete Success',
  DELETE_ARMOR_FAIL = '[Armor] Delete Fail',
  SET_SELECTED_ARMOR = '[Armor] Set Selected Armor',
  CLEAR_SELECTED_ARMOR = '[Armor] Clear Selected Armor',
  INITIALIZE_ARMOR = '[Armor] Initialize Selected Armor',
  TOGGLE_SHOW_DETAILS = '[Armor] Toggle Show Details'
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

export class CreateArmor implements Action {
  readonly type = ArmorActionTypes.SAVE_ARMOR;
  constructor(public payload: Armor) {}
}

export class CreateArmorSuccess implements Action {
  readonly type = ArmorActionTypes.SAVE_ARMOR_SUCCESS;
  constructor(public payload: Armor) {}
}

export class CreateArmorFail implements Action {
  readonly type = ArmorActionTypes.SAVE_ARMOR_FAIL;
  constructor(public payload: string) {}
}

export class DeleteArmor implements Action {
  readonly type = ArmorActionTypes.DELETE_ARMOR;
  constructor(public payload: number) {}
}

export class DeleteArmorSuccess implements Action {
  readonly type = ArmorActionTypes.DELETE_ARMOR_SUCCESS;
  constructor(public payload: number) {}
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

export class InitializeArmor implements Action {
  readonly type = ArmorActionTypes.INITIALIZE_ARMOR;
}

export class ToggleShowDetails implements Action {
  readonly type = ArmorActionTypes.TOGGLE_SHOW_DETAILS;
  constructor(public payload: Boolean) {}
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
  | InitializeArmor
  | CreateArmor
  | CreateArmorSuccess
  | CreateArmorFail
  | ToggleShowDetails
  ;
