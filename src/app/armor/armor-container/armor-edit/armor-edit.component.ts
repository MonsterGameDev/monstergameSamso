import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Armor, ArmorTypeEnum } from '../../+state/armor.interfaces';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-armor-edit',
  templateUrl: './armor-edit.component.html',
  styleUrls: ['./armor-edit.component.scss']
})
export class ArmorEditComponent implements OnInit, OnChanges {
  @Input() selectedArmor: Armor;

  keys: string[];
  armorTypeEnum = ArmorTypeEnum;

  armorNameErrMsg: string;
  armorLevelErrMsg: string;
  armorTypeErrMsg: string;
  armorHealthErrMsg: string;
  armorPowerErrMsg: string;
  armorDefenseErrMsg: string;


  //#region Error Messages
  private nameErrorMessages = {
    required: 'Armor Name is a required field',
    minLength: 'Armor Name must be at least 3 characters long'
  };

  private levelErrorMessages = {
    requires: 'Armor Level is a required field',
    min: 'Armor Level must be a 0 or more',
    max: 'Armor Level cannot be more than 50'
  };

  private typeErrorMessages = {
    required: 'You must select a type for the armor'
  };

  private healthStatErrorMessages = {
    min: 'Health must be a 0 or more',
    max: 'Health must be 50 or less'
  };

  private powerStatErrorMessages = {
    min: 'Power must be a 0 or more',
    max: 'Power must be 50 or less'
  };

  private defenseStatErrorMessages = {
    min: 'Defense must be a 0 or more',
    max: 'Defense must be 50 or less'
  };
  //#endregion Error Messages

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.keys = Object.keys(this.armorTypeEnum);

    this.fb.group({
      armorName: ['', [Validators.minLength(3), Validators.required]],
      armorLevel: ['', [Validators.required, Validators.min(3), Validators.max(50)]],
      armorType: ['', Validators.required],
      armorStats: this.fb.group({
        health: ['', Validators.min(0), Validators.max(50)],
        power: ['', Validators.min(0), Validators.max(50)],
        defense: ['', Validators.min(0), Validators.max(50)]
      })
    });

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedArmor) {
      this.displayArmor(this.selectedArmor);
    }
  }

  displayArmor(armor: Armor) {

  }

  save() {
    console.log('Save Clicked');
  }



}
