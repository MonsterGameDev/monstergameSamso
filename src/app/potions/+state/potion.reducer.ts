import { PotionState, Potion, PotionEffectTypeEnum } from './potions.interfaces';
import { PotionsActions, PotionsActionTypes, SetSelectedPotion } from './potions.actions';

const initialState: PotionState = {
    potions:[],
    selectedPotionId: null,
    showImage: false,
    error: null
};

export function potionReducer(state: PotionState = initialState, action: PotionsActions) {
    switch (action.type) {
        case PotionsActionTypes.LOAD_POTIONS_SUCCESS:
            return {
                ...state,
                potions: action.payload,
                error: null
            };
        case PotionsActionTypes.LOAD_POTIONS_FAIL:
            return {
                ...state,
                potions: [],
                error: action.payload
            };
        case PotionsActionTypes.CREATE_POTION_SUCCESS:
            return {
                ...state,
                potions: [ ...state.potions, action.payload],
                error: null
            };
        case PotionsActionTypes.CREATE_POTION_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case PotionsActionTypes.UPDATE_POTION_SUCCESS:
            return {
                ...state,
                potions: state.potions.map((item: Potion) => item.id === action.payload.id ? action.payload : item),
                error: null
            };
        case PotionsActionTypes.UPDATE_POTION_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case PotionsActionTypes.DELETE_POTION_SUCCESS:
            return {
                ...state,
                potions: state.potions.filter((item: Potion) => item.id !== action.payload),
                error: null
            };
        case PotionsActionTypes.DELETE_POTION_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case PotionsActionTypes.INITIALIZE_SELECTED_POTION:
            return {
                ...state,
                selectedPotionId: 0
            };
        case PotionsActionTypes.SET_SELECTED_POTION:
            return {
                ...state,
                selectedPotionId: 0
            };
        case PotionsActionTypes.CLEAR_SELECTED_POTION:
            return {
                ...state,
                selectedPotionId: null
            };
        case PotionsActionTypes.TOGGLE_SHOW_IMAGE:
            return {
                ...state,
                showImage: !state.showImage
            };
        default:
            return state;
    }
}
