import { ArmorActions, ArmorActionTypes } from './armor.actions';
import { ArmorState, ArmorTypeEnum, Armor} from './armor.interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const initialState: ArmorState = {
    armor: [],
    error: '',
    selectedArmorId: null,
    showImage: false,
    showDetails: false
};

export function armorReducer(state: ArmorState = initialState, action: ArmorActions) {
    switch (action.type) {
        case ArmorActionTypes.LOAD_ARMORS_SUCCESS:
            return {
                ...state,
                armor: action.payload,
                error: ''
            };
        case ArmorActionTypes.LOAD_ARMORS_FAIL:
            return {
                ...state,
                armor: [],
                error: action.payload
            };
        case ArmorActionTypes.EDIT_ARMOR_SUCCESS:
            const updatedArmorArray: Armor[] = state.armor
                .map((item: Armor) => action.payload.id === item.id ? action.payload : item);
            return {
                ...state,
                armor: updatedArmorArray,
                selectedArmorId: action.payload.id,
                error: ''
            };
        case ArmorActionTypes.EDIT_ARMOR_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case ArmorActionTypes.SAVE_ARMOR_SUCCESS:
            return {
                ...state,
                armor: [...state.armor, action.payload],
                error: ''
            };
        case ArmorActionTypes.SAVE_ARMOR_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case ArmorActionTypes.SET_SELECTED_ARMOR:
            return {
                ...state,
                selectedArmorId: action.payload
            };
        case ArmorActionTypes.CLEAR_SELECTED_ARMOR:
            return {
                ...state,
                selectedArmorId: null
            };
        case ArmorActionTypes.INITIALIZE_ARMOR:
            return {
                ...state,
                selectedArmorId: 0
            };
        case ArmorActionTypes.DELETE_ARMOR_SUCCESS:
            return {
                ...state,
                armor: state.armor.filter((armor: Armor) => armor.id !== action.payload),
                error: ''
            };
        case ArmorActionTypes.DELETE_ARMOR_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case ArmorActionTypes.TOGGLE_SHOW_DETAILS:
            return {
                ...state,
                showDetails: action.payload
            };
        default:
            return state;
    }
}


const getFeatureArmorsState = createFeatureSelector<ArmorState>('armor');

export const getArmors = createSelector(
    getFeatureArmorsState,
    (state: ArmorState) => state.armor
);

export const getSelectedArmorId = createSelector(
    getFeatureArmorsState,
    state => state.selectedArmorId
);

export const getSelectedArmor = createSelector(
    getFeatureArmorsState,
    getSelectedArmorId,
    (state: ArmorState, selectedArmorId: number): Armor => {
        if (selectedArmorId === 0) {
            return {
                id: 0,
                armorName: '',
                armorType: ArmorTypeEnum.None,
                armorLevel: null,
                armorStats: {
                    health: null,
                    power: null,
                    defense: null
                },
                imgUrl: ''
            };
        } else {
            return selectedArmorId ? state.armor.find(p => p.id === selectedArmorId) : null;
        }
    }
);



export const getShowImage = createSelector(
    getFeatureArmorsState,
    state => state.showImage
);

export const getShowDetails = createSelector(
    getFeatureArmorsState,
    state => state.showDetails
);

export const getError = createSelector(
    getFeatureArmorsState,
    state => state.error
);
