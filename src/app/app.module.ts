import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { ArmorModule } from './armor/armor.module';
import { WeaponsModule } from './weapons/weapons.module';
import { PotionsModule } from './potions/potions.module';
import { DataService } from './services/data.service';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ArmorModule,
    WeaponsModule,
    PotionsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    RouterModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Monster Madness',
      logOnly: environment.production,
      maxAge: 25
    })

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
