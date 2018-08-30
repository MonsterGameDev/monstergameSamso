import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PotionState, Potion, PotionEffectTypeEnum } from './potions.interfaces';

const getPotionsFeatureState = createFeatureSelector<PotionState>('potions');

export const getAllPotions = createSelector(
    getPotionsFeatureState,
    state => state.potions
);

export const getSelectedPotionId = createSelector(
    getPotionsFeatureState,
    state => state.selectedPotionId
);

export const getSelectedPotion = createSelector(
    getPotionsFeatureState,
    getSelectedPotionId,
    (state: PotionState, selectedPotionId: number): Potion => {
        if (selectedPotionId === 0) {
            return {
                id: 0,
                potionEffectDuration: null,
                potionEffectType: PotionEffectTypeEnum.None,
                potionName: 'New Potion',
                potionStrength: null
            };
        } else {
            return selectedPotionId ? state.potions.find(p => p.id === selectedPotionId) : null;
        }
    }
);

export const showImage = createSelector(
    getPotionsFeatureState,
    state => state.showImage
);

export const getError = createSelector(
    getPotionsFeatureState,
    state => state.error
);
