import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Weapon } from '../../+state/weapons.interfaces';
import { Observable } from 'rxjs';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';

@Component({
  selector: 'app-weapons-list',
  templateUrl: './weapons-list.component.html',
  styleUrls: ['./weapons-list.component.scss']
})
export class WeaponsListComponent implements OnInit {
  @Input() weapons: Weapon[];
  @Input() showDetails: boolean;

  @Output() toggleShowDetails = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  changeShowDetails(value: boolean) {
    this.toggleShowDetails.emit(value);
  }

}
