import { Component, OnInit } from '@angular/core';
import { Armor, ArmorState } from '../+state/armor.interfaces';
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

  constructor(private store: Store<ArmorState>) { }

  ngOnInit() {
    this.store.dispatch(new armorActions.LoadArmors());

    this.armor$ = this.store.pipe(select(fromArmor.getArmors));
    this.armor$.subscribe(val => console.log(val));
    this.errorMessage$ = this.store.pipe(select(fromArmor.getError));
  }

}
