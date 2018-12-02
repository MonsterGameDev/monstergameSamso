import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestWeaponsstoreComponent } from './test-weaponsstore/test-weaponsstore.component';
import { StoreModule } from '@ngrx/store';
import * as fromWeapons from './+state/weapons.reducer';
import { EffectsModule } from '@ngrx/effects';
import { WeaponsEffects } from './+state/weapons.effects';
import { WeaponsContainerComponent } from './weapons-container/weapons-container.component';
import { WeaponsListComponent } from './weapons-container/weapons-list/weapons-list.component';
import { WeaponsEditComponent } from './weapons-container/weapons-edit/weapons-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('weapons', fromWeapons.reducer),
    EffectsModule.forFeature([WeaponsEffects]),
    ReactiveFormsModule

  ],
  declarations: [WeaponsContainerComponent, WeaponsListComponent, WeaponsEditComponent],
  exports: [WeaponsContainerComponent]
})
export class WeaponsModule { }
