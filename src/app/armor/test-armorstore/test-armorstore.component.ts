import { Component, OnInit } from '@angular/core';
import { Armor, ArmorState, ArmorTypeEnum } from '../+state/armor.interfaces';
import { Store, select } from '@ngrx/store';
import * as fromArmor from './../+state/armor.reducers';
import * as armorActions from './../+state/armor.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-armorstore',
  templateUrl: './test-armorstore.component.html',
  styleUrls: ['./test-armorstore.component.css']
})
export class TestArmorstoreComponent implements OnInit {
  armor$: Observable<Armor[]>;
  errorMessage$: Observable<string>;
  selectedArmor$: Observable<Armor>;
  selectedArmorId$: Observable<number>;

  armor: Armor[];
  selectedArmor: Armor;
  selectedArmorId: number;

  constructor(private store: Store<ArmorState>) { }

  ngOnInit() {
    this.store.dispatch(new armorActions.LoadArmors());

    this.armor$ = this.store.pipe(select(fromArmor.getArmors));
    this.errorMessage$ = this.store.pipe(select(fromArmor.getError));
    this.selectedArmor$ = this.store.pipe(select(fromArmor.getSelectedArmor));
    this.selectedArmorId$ = this.store.pipe(select(fromArmor.getSelectedArmorId));

    this.armor$.subscribe(a => this.armor = a);
    this.selectedArmor$.subscribe(a => this.selectedArmor = a);
    this.selectedArmorId$.subscribe(id => this.selectedArmorId = id);
  }

  selectArmor(id: number): void {
    this.store.dispatch(new armorActions.SetSelectedArmor(id));
  }

  addArmor() {
    this.store.dispatch(new armorActions.InitializeArmor);
  }

  deleteArmor(id: number) {
    this.store.dispatch(new armorActions.DeleteArmor(this.selectedArmorId));
  }

  save(selectedArmor: Armor) {
    const updatedArmor: Armor = {
      armorName: 'Updated Name',
      armorLevel: 99,
      armorType: ArmorTypeEnum.None,
      imgUrl: '1.jpg',
      armorStats: {
        health: 99,
        power: 99,
        defense: 99
      }
    };

    const a = { ...this.selectedArmor, ...updatedArmor };

    if (a.id === 0) {
      this.store.dispatch(new armorActions.CreateArmor(a));
    } else {
      this.store.dispatch(new armorActions.EditArmor(a));
    }
  }
}
