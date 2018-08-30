import { Action } from '@ngrx/store';
import { Weapon } from './weapons.interfaces';

export enum WeaponsActionTypes {
  LOAD_WEAPONS = '[Weapons] Load Weapons',
  LOAD_WEAPONS_SUCCESS = '[Weapons] Load Weapons Success',
  LOAD_WEAPONS_FAIL = '[Weapons] Load Weapons Fail',
  CREATE_WEAPON = '[Weapons] Create Weapon',
  CREATE_WEAPON_SUCCESS = '[Weapons] Create Weapon Success',
  CREATE_WEAPON_FAIL = '[Weapons] Create Weapon Fail',
  UPDATE_WEAPON = '[Weapons] Update Weapon',
  UPDATE_WEAPON_SUCCESS = '[Weapons] Update Weapon Success',
  UPDATE_WEAPON_FAIL = '[Weapons] Update Weapon Fail',
  DELETE_WEAPON = '[Weapons] Delete Weapon',
  DELETE_WEAPON_SUCCESS = '[Weapons] Delete Weapon Success',
  DELETE_WEAPON_FAIL = '[Weapons] Delete Weapon Fail',
  SET_SELECTED_WEAPON = '[Weapons] Set Selected Weapon',
  CLEAR_SELECTED_WEAPON = '[Weapons] Clear Selected Weapon',
  INITIALIZE_WEAPON = '[Weapons] Initialize Weapons',
  TOGGLE_SHOW_IMAGE = '[Weapons] Toggle Show Image'
}

export class LoadWeapons implements Action {
  readonly type = WeaponsActionTypes.LOAD_WEAPONS;
}

export class LoadWeaponsSuccess implements Action {
  readonly type = WeaponsActionTypes.LOAD_WEAPONS_SUCCESS;
  constructor(public payload: Weapon[]) {}
}

export class LoadWeaponsFail implements Action {
  readonly type = WeaponsActionTypes.LOAD_WEAPONS_FAIL;
  constructor(public payload: string) {}
}


export class CreateWeapon implements Action {
  readonly type = WeaponsActionTypes.CREATE_WEAPON;
  constructor(public payload: Weapon) {}
}


export class CreateWeaponSuccess implements Action {
  readonly type = WeaponsActionTypes.CREATE_WEAPON_SUCCESS;
  constructor(public payload: Weapon) {}
}


export class CreateWeaponFail implements Action {
  readonly type = WeaponsActionTypes.CREATE_WEAPON_FAIL;
  constructor(public payload: string) {}
}

export class UpdateWeapon implements Action {
  readonly type = WeaponsActionTypes.UPDATE_WEAPON;
  constructor (public payload: Weapon) {}
}

export class UpdateWeaponSuccess implements Action {
  readonly type = WeaponsActionTypes.UPDATE_WEAPON_SUCCESS;
  constructor (public payload: Weapon) {}
}

export class UpdateWeaponFail implements Action {
  readonly type = WeaponsActionTypes.UPDATE_WEAPON_FAIL;
  constructor (public payload: string) {}
}

export class DeleteWeapon implements Action {
  readonly type = WeaponsActionTypes.DELETE_WEAPON;
  constructor (public payload: number) {}
}

export class DeleteWeaponSuccess implements Action {
  readonly type = WeaponsActionTypes.DELETE_WEAPON_SUCCESS;
  constructor(public payload: number) {}
}

export class DeleteWeaponFail implements Action {
  readonly type = WeaponsActionTypes.DELETE_WEAPON_FAIL;
  constructor (public payload: string) {}
}

export class SetSelectedWeapon implements Action {
  readonly type = WeaponsActionTypes.SET_SELECTED_WEAPON;
  constructor(public payload: number) {}
}

export class ClearSelectedWeapon implements Action {
  readonly type = WeaponsActionTypes.CLEAR_SELECTED_WEAPON;
}

export class InitializeWeapon implements Action {
  readonly type = WeaponsActionTypes.INITIALIZE_WEAPON;
}

export class ToggleShowImage implements Action {
  readonly type = WeaponsActionTypes.TOGGLE_SHOW_IMAGE;
}



export type WeaponsActions =
  LoadWeapons
  | LoadWeaponsSuccess
  | LoadWeaponsFail
  | CreateWeapon
  | CreateWeaponSuccess
  | CreateWeaponFail
  | UpdateWeapon
  | UpdateWeaponSuccess
  | UpdateWeaponFail
  | DeleteWeapon
  | DeleteWeaponSuccess
  | DeleteWeaponFail
  | SetSelectedWeapon
  | ClearSelectedWeapon
  | ToggleShowImage
  | InitializeWeapon
  ;
