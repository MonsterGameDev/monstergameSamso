import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromPotions from './+state/potion.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PotionEffects } from './+state/potion.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('potions', fromPotions.potionReducer),
    EffectsModule.forFeature([PotionEffects])
  ],
  declarations: []
})
export class PotionsModule { }
