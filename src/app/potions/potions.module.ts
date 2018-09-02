import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromPotions from './+state/potion.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PotionEffects } from './+state/potion.effects';
import { PotionsContainerComponent } from './potions-container/potions-container.component';
import { PotionsListComponent } from './potions-container/potions-list/potions-list.component';
import { PotionsEditComponent } from './potions-container/potions-edit/potions-edit.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('potions', fromPotions.potionReducer),
    EffectsModule.forFeature([PotionEffects])
  ],
  declarations: [PotionsContainerComponent, PotionsListComponent, PotionsEditComponent],
  exports: [PotionsContainerComponent]
})
export class PotionsModule { }
