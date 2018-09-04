import { Component, OnInit } from '@angular/core';
import { Weapon, WeaponState } from '../+state/weapons.interfaces';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromWeapons from './../+state/weapons.selector';
import * as weaponActions from './../+state/weapons.action';

@Component({
  selector: 'app-weapons-container',
  templateUrl: './weapons-container.component.html',
  styleUrls: ['./weapons-container.component.scss']
})
export class WeaponsContainerComponent implements OnInit {
  weapons$: Observable<Weapon[]>;
  showDetails$: Observable<boolean>;

  constructor(private store: Store<WeaponState>) { }

  ngOnInit() {
    this.store.dispatch(new weaponActions.LoadWeapons());

    this.weapons$ = this.store.pipe(select(fromWeapons.getAllWeapons));
    this.showDetails$ = this.store.pipe(select(fromWeapons.getShowDetails));
  }

  showDetails(value: boolean) {
    this.store.dispatch(new weaponActions.ToggleShowDetails(value));
  }

}
