import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { armorReducer } from './+state/armor.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ArmorEffects } from './+state/armor.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('armor', armorReducer),
    EffectsModule.forFeature([ArmorEffects])
  ],
  declarations: []
})
export class ArmorModule { }
