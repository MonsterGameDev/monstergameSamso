import { Component, OnInit } from '@angular/core';
import { Potion, PotionState } from '../+state/potions.interfaces';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromPotions from './../+state/potion.selectors';
import * as potionActions from './../+state/potions.actions';

@Component({
  selector: 'app-potions-container',
  templateUrl: './potions-container.component.html',
  styleUrls: ['./potions-container.component.scss']
})
export class PotionsContainerComponent implements OnInit {
  potions$: Observable<Potion[]>;
  showDetails$: Observable<boolean>;

  constructor(private store: Store<PotionState>) { }

  ngOnInit() {
    this.store.dispatch(new potionActions.LoadPotions());

    this.potions$ = this.store.pipe(select(fromPotions.getAllPotions));
    this.showDetails$ = this.store.pipe(select(fromPotions.getShowDetails));
  }

  toggleShowDetails(value: boolean) {
    this.store.dispatch(new potionActions.ToggleShowDetails(value));
  }

}
