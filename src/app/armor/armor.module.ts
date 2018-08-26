import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromArmor from './+state/armor.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ArmorEffects } from './+state/armor.effects';
import { TestArmorstoreComponent } from './test-armorstore/test-armorstore.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('armor', fromArmor.armorReducer),
    EffectsModule.forFeature([ArmorEffects])
  ],
  declarations: [TestArmorstoreComponent],
  exports: [TestArmorstoreComponent]
})
export class ArmorModule { }
