import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromArmor from './+state/armor.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ArmorEffects } from './+state/armor.effects';
import { TestArmorstoreComponent } from './test-armorstore/test-armorstore.component';
import { ArmorContainerComponent } from './armor-container/armor-container.component';
import { ArmorListComponent } from './armor-container/armor-list/armor-list.component';
import { ArmorEditComponent } from './armor-container/armor-edit/armor-edit.component';
import { ArmorDetailsComponent } from './armor-container/armor-details/armor-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('armor', fromArmor.armorReducer),
    EffectsModule.forFeature([ArmorEffects]),
    ReactiveFormsModule
  ],
  declarations: [TestArmorstoreComponent,
    ArmorContainerComponent,
    ArmorListComponent,
    ArmorEditComponent,
    ArmorDetailsComponent],
  exports: [TestArmorstoreComponent, ArmorContainerComponent]
})
export class ArmorModule { }
