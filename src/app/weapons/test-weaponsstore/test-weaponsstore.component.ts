import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { WeaponState, Weapon } from '../+state/weapons.interfaces';
import * as weaponActions from './../+state/weapons.action';
import * as fromWeapons from './../+state/weapons.selector';
import { Observable } from 'rxjs';
import { Armor } from '../../armor/+state/armor.interfaces';

@Component({
  selector: 'app-test-weaponsstore',
  templateUrl: './test-weaponsstore.component.html',
  styleUrls: ['./test-weaponsstore.component.css']
})
export class TestWeaponsstoreComponent implements OnInit {
  weapons$: Observable<Weapon[]>;
  selectedWeapon$: Observable<Weapon>;

  selectedWeapon: Weapon;
  constructor(private store: Store<WeaponState>) { }

  ngOnInit() {
    this.store.dispatch(new weaponActions.LoadWeapons());

    this.weapons$ = this.store.pipe(select(fromWeapons.getAllWeapons));
    this.selectedWeapon$ = this.store.pipe(select(fromWeapons.getSelectedWeapon));

    this.selectedWeapon$.subscribe(val => this.selectedWeapon = val);
    // this.weapons$.subscribe(val => console.log(val));

  }

  initialize() {
    this.store.dispatch(new weaponActions.InitializeWeapon);


  }

  save() {
    const newWeapon: Weapon = {
      weaponName: 'Æble Kniv',
      weaponStats: {
        power: 1,
        defence: 2,
        damage: 3,
      },
      weaponLevel: 5,
      weaponBaseDamage: 4,
      imageUrl: '1.jpg'
    };

    const updatedWeapon: Weapon = {
      weaponName: 'Æble Kniv Updated',
      weaponStats: {
        power: 1,
        defence: 2,
        damage: 3,
      },
      weaponLevel: 5,
      weaponBaseDamage: 4,
      imageUrl: '1.jpg'
    };

    const w: Weapon = {...this.selectedWeapon, ...newWeapon};

    if (this.selectedWeapon.id === 0) {
      this.store.dispatch(new weaponActions.CreateWeapon({...this.selectedWeapon, ...newWeapon}));
    } else {
      this.store.dispatch(new weaponActions.UpdateWeapon({...this.selectedWeapon, ...updatedWeapon}));
    }
  }

}
