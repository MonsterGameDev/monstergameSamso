import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { Potion } from '../../+state/potions.interfaces';

@Component({
  selector: 'app-potions-list',
  templateUrl: './potions-list.component.html',
  styleUrls: ['./potions-list.component.scss']
})
export class PotionsListComponent implements OnInit {
  @Input() potions: Potion[];
  @Input() showDetails: boolean;
  @Output() toggleShowDetails = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {

  }

  changeShowDetails(value: boolean) {
    this.toggleShowDetails.emit(value);
  }

}
