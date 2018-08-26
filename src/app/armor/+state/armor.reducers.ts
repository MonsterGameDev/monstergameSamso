import { ArmorActions, ArmorActionTypes } from './armor.actions';
import { ArmorState, ArmorTypeEnum, Armor} from './armor.interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs';

const initialState: ArmorState = {
    armor: [],
    error: '',
    selectedArmorId: null,
    showImage: false
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
        case ArmorActionTypes.INITIALIZE_SELECTED_ARMOR:
            return {
                ...state,
                selectedArmorId: 0
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
                armorLevel: 0,
                armorStats: {
                    health: 0,
                    power: 0,
                    defense: 0
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

export const getError = createSelector(
    getFeatureArmorsState,
    state => state.error
);
