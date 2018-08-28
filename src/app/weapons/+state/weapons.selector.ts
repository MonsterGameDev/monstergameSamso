import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WeaponState, Weapon } from './weapons.interfaces';

const getWeaponsFeatureState = createFeatureSelector<WeaponState>('weapons');

export const getAllWeapons = createSelector(
    getWeaponsFeatureState,
    state => state.weapons
);

export const getSelectedWeaponId = createSelector(
    getWeaponsFeatureState,
    state => state.selectedWeaponId
);

export const getSelectedWeapon = createSelector(
    getWeaponsFeatureState,
    getSelectedWeaponId,
    (state: WeaponState, selectedWeaponId: number): Weapon => {
        if (selectedWeaponId === 0) {
            return {
                id: 0,
                imageUrl: 'none.jpg',
                weaponBaseDamage: null,
                weaponLevel: null,
                weaponName: 'New',
                weaponStats: {
                    power: null,
                    defence: null,
                    damage: null
                }
            };
        } else {
            return selectedWeaponId ? state.weapons.find(w => w.id === selectedWeaponId) : null;
        }
    }
);

export const getShowImage = createSelector(
    getWeaponsFeatureState,
    state => state.showImage
);

export const getError = createSelector(
    getWeaponsFeatureState,
    state => state.error
);
