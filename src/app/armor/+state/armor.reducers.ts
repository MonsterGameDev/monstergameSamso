import { ArmorActions, ArmorActionTypes } from './armor.actions';
import { ArmorState } from './armor.interfaces';

export function armorReducer(state: ArmorState, action: ArmorActions) {
    switch (action.type) {
        case ArmorActionTypes.LOAD_ARMORS_SUCCESS:
            return {
                ...state,
                armors: action.payload,
                error: ''
            };
        case ArmorActionTypes.LOAD_ARMORS_FAIL:
            return {
                ...state,
                armors: [],
                error: action.payload
            };
        default:
            return state;
    }
}
