import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Armor } from '../../+state/armor.interfaces';

@Component({
  selector: 'app-armor-list',
  templateUrl: './armor-list.component.html',
  styleUrls: ['./armor-list.component.scss']
})
export class ArmorListComponent implements OnInit {
  @Input() armorList: Armor[];
  @Input() displayDetails: boolean;
  @Input() error: boolean;
  @Output() toggleShowDetails = new EventEmitter<boolean>();
  @Output() selectedArmor = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  changeShowDetails(value: boolean) {
    this.toggleShowDetails.emit(value);
  }

  selectArmor(id: number) {
    this.selectedArmor.emit(id);
  }

}
