import { Component, OnInit } from '@angular/core';
import { Armor, ArmorState } from './../+state/armor.interfaces';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromArmor from './../+state/armor.reducers';
import * as armorActions from './../+state/armor.actions';

@Component({
  selector: 'app-armor-container',
  templateUrl: './armor-container.component.html',
  styleUrls: ['./armor-container.component.scss']
})
export class ArmorContainerComponent implements OnInit {
  armorList$: Observable<Armor[]>;
  displayDetails$: Observable<boolean>;
  error$: Observable<string>;
  selectedArmor$: Observable<Armor>;

  constructor(private store: Store<ArmorState>) { }

  ngOnInit() {
    this.store.dispatch(new armorActions.LoadArmors());

    this.armorList$ = this.store.pipe(select(fromArmor.getArmors));
    this.displayDetails$ = this.store.pipe(select(fromArmor.getShowDetails));
    this.error$ = this.store.pipe(select(fromArmor.getError));
    this.selectedArmor$ = this.store.pipe(select(fromArmor.getSelectedArmor));

  }

  toggleShowDetails(value: boolean): void {
    this.store.dispatch(new armorActions.ToggleShowDetails(value));
  }

  selectedArmor(value: number): void {
    this.store.dispatch(new armorActions.SetSelectedArmor(value));
  }


}
