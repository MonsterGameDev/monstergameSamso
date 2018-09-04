import { Component, OnInit } from '@angular/core';
import { PotionEffectTypeEnum } from '../../+state/potions.interfaces';

@Component({
  selector: 'app-potions-edit',
  templateUrl: './potions-edit.component.html',
  styleUrls: ['./potions-edit.component.scss']
})
export class PotionsEditComponent implements OnInit {
  keys: string[];
  potionEffectTypeEnum = PotionEffectTypeEnum;
  constructor() { }

  ngOnInit() {
  }

}
