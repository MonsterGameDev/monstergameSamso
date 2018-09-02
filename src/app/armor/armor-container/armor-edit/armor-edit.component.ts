import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Armor, ArmorTypeEnum } from '../../+state/armor.interfaces';
import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-armor-edit',
  templateUrl: './armor-edit.component.html',
  styleUrls: ['./armor-edit.component.scss']
})
export class ArmorEditComponent implements OnInit, OnChanges {
  @Input() selectedArmor: Armor;

  keys: string[];
  armorTypeEnum = ArmorTypeEnum;
  armorForm: FormGroup;

  armorNameErrMsg: string;
  armorLevelErrMsg: string;
  armorTypeErrMsg: string;
  armorHealthErrMsg: string;
  armorPowerErrMsg: string;
  armorDefenseErrMsg: string;


  //#region Error Messages
  private nameErrorMessages = {
    required: 'Armor Name is a required field',
    minlength: 'Armor Name must be at least 3 characters long'
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

    this.armorForm = this.fb.group({
      armorName: ['', [Validators.minLength(3), Validators.required]],
      armorLevel: ['', [Validators.required, Validators.min(3), Validators.max(50)]],
      armorType: ['None', [Validators.required]],
      armorStats: this.fb.group({
        health: ['', [Validators.min(0), Validators.max(50)]],
        power: ['', [Validators.min(0), Validators.max(50)]],
        defense: ['', [Validators.min(0), Validators.max(50)]]
      })
    });

    //#region Form Controls
    const armorNameControl = this.armorForm.get('armorName');
    const armorLevelControl = this.armorForm.get('armorLevel');
    const armorTypeControl = this.armorForm.get('armorType');
    const armorHealthControl = this.armorForm.get('armorStats.health');
    const armorPowerControl = this.armorForm.get('armorStats.power');
    const armorDefenseControl = this.armorForm.get('armorStats.defense');
    //#endregion Form Controls

    //#region Form Control ValueChanges
    armorNameControl.valueChanges.pipe(debounceTime(1000)).subscribe(() => this.armorNameValidityCheck(armorNameControl));
    armorLevelControl.valueChanges.subscribe(() => this.armorLevelValidityCheck(armorLevelControl));
    armorTypeControl.valueChanges.subscribe(() => this.armorTypeValidityCheck(armorTypeControl));
    armorHealthControl.valueChanges.subscribe(() => this.armorStatHealthValidityCheck(armorHealthControl));
    armorPowerControl.valueChanges.subscribe(() => this.armorStatPowerhValidityCheck(armorPowerControl));
    armorDefenseControl.valueChanges.subscribe(() => this.armorStatDefenseValidityCheck(armorDefenseControl));
    //#endregion Form Control ValueChanges

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedArmor) {
      this.displayArmor(this.selectedArmor);
    }
  }

  //#region Validity Checks
  armorNameValidityCheck(c: AbstractControl) {
    this.armorNameErrMsg = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.armorNameErrMsg = Object.keys(c.errors).map(key => this.nameErrorMessages[key]).toString();
    }
  }

  armorTypeValidityCheck(c: AbstractControl) {
    this.armorTypeErrMsg = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.armorTypeErrMsg = Object.keys(c.errors).map(key => this.typeErrorMessages[key]).toString();
    }
  }

  armorLevelValidityCheck(c: AbstractControl) {
    this.armorLevelErrMsg = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.armorLevelErrMsg = Object.keys(c.errors).map(key => this.levelErrorMessages[key]).toString();
    }
  }

  armorStatHealthValidityCheck(c: AbstractControl) {
    this.armorHealthErrMsg = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.armorHealthErrMsg = Object.keys(c.errors).map(key => this.healthStatErrorMessages[key]).toString();
    }
  }

  armorStatPowerhValidityCheck(c: AbstractControl) {
    this.armorPowerErrMsg = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.armorPowerErrMsg = Object.keys(c.errors).map(key => this.powerStatErrorMessages[key]).toString();
    }
  }

  armorStatDefenseValidityCheck(c: AbstractControl) {
    this.armorDefenseErrMsg = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.armorDefenseErrMsg = Object.keys(c.errors).map(key => this.defenseStatErrorMessages[key]).toString();
    }
  }

  //#endregion


  displayArmor(armor: Armor) {

  }

  save() {
    console.log('Save Clicked');
  }



}
