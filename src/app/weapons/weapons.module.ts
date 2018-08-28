import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestWeaponsstoreComponent } from './test-weaponsstore/test-weaponsstore.component';
import { StoreModule } from '@ngrx/store';
import * as fromWeapons from './+state/weapons.reducer';
import { EffectsFeatureModule } from '@ngrx/effects/src/effects_feature_module';
import { EffectsModule } from '@ngrx/effects';
import { WeaponsEffects } from './+state/weapons.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('weapons', fromWeapons.reducer),
    EffectsModule.forFeature([WeaponsEffects])

  ],
  declarations: [TestWeaponsstoreComponent],
  exports: [TestWeaponsstoreComponent]
})
export class WeaponsModule { }
