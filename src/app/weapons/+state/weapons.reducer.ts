import { WeaponState, Weapon } from './weapons.interfaces';
import { WeaponsActions, WeaponsActionTypes } from './weapons.action';


export const initialState: WeaponState = {
  error: null,
  selectedWeaponId: 0,
  weapons: [],
  showDetails: false
};

export function reducer(state: WeaponState = initialState, action: WeaponsActions): WeaponState {
  switch (action.type) {
    case WeaponsActionTypes.LOAD_WEAPONS_SUCCESS:
      return {
        ...state,
        weapons: action.payload,
        error: null
      };
    case WeaponsActionTypes.LOAD_WEAPONS_FAIL:
      return {
        ...state,
        weapons: [],
        error: action.payload
      };
    case WeaponsActionTypes.CREATE_WEAPON_SUCCESS:
      return {
        ...state,
        weapons: [...state.weapons, action.payload],
        error: null
      };
    case WeaponsActionTypes.CREATE_WEAPON_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case WeaponsActionTypes.UPDATE_WEAPON_SUCCESS:
      return {
        ...state,
        weapons: state.weapons.map((item: Weapon) => item.id === action.payload.id ? action.payload : item),
        error: null,
        selectedWeaponId: action.payload.id
      };
    case WeaponsActionTypes.UPDATE_WEAPON_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case WeaponsActionTypes.DELETE_WEAPON_SUCCESS:
      return {
        ...state,
        weapons: state.weapons.filter((item: Weapon) => item.id !== action.payload),
        selectedWeaponId: null,
        error: null
      };
    case WeaponsActionTypes.DELETE_WEAPON_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case WeaponsActionTypes.SET_SELECTED_WEAPON:
      return {
        ...state,
        selectedWeaponId: action.payload
      };
    case WeaponsActionTypes.CLEAR_SELECTED_WEAPON:
      return {
        ...state,
        selectedWeaponId: null
      };
    case WeaponsActionTypes.TOGGLE_SHOW_DETAILS:
      return {
        ...state,
        showDetails: action.payload
      };
    case WeaponsActionTypes.INITIALIZE_WEAPON:
      return {
        ...state,
        selectedWeaponId: 0
      };


    default:
      return state;
  }
}
