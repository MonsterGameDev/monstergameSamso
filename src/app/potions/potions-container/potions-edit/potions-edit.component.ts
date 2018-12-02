import { Component, OnInit } from '@angular/core';
import { PotionEffectTypeEnum } from '../../+state/potions.interfaces';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-potions-edit',
  templateUrl: './potions-edit.component.html',
  styleUrls: ['./potions-edit.component.scss']
})
export class PotionsEditComponent implements OnInit {

  potionForm: FormGroup;
  keys: string[];
  potionEffectTypeEnum = PotionEffectTypeEnum;

  potionNameErrMsg: string;
  potionStrengthErrMsg: string;
  potionEffectDurationErrMsg: string;
  potionEffectTypeErrMsg: string;

  //#region on Error Messages
  private nameErrorMessages = {
    required: 'The field PotionName cannot be empty',
    minlength: 'The field PotionName myst contain at least 3 characters'
  };

  private strengthErrorMessages = {
    required: 'The field PotionStrength cannot be empty',
    min: 'The field PotionStrength must have a value of 0 or more',
    max: 'The field PotionStrength must have a value of 50 or less',
    pattern: 'The field PotionStrength must contain only numbers'
  };

  private effectDurationErrorMessages = {
    required: 'The field EffectDuration cannot be empty',
    min: 'The field EffectDuration must have a value of 10 or more',
    pattern: 'The field EffectDuration must contain only numbers'
  };

  private effectTypeErrorMessages = {
    required: 'You have to select a proper effect-type'
  };
  //#endregion Error Messages
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.keys = Object.keys(this.potionEffectTypeEnum);

    this.potionForm = this.fb.group({
      potionName:  ['', [Validators.required, Validators.minLength(3)]],
      potionStrength: ['', [Validators.required, Validators.min(0), Validators.max(50), Validators.pattern(/^[0-9]*$/)]],
      potionEffectDuration: ['', [Validators.required, Validators.min(10), Validators.pattern(/^[0-9]*$/)]],
      potionEffectType: ['None', [Validators.required]]
    });

  const potionNameControl = this.potionForm.get('potionName');
  const potionStrengthControl = this.potionForm.get('potionStrength');
  const potionEffectDurationControl = this.potionForm.get('potionEffectDuration');
  const potionEffectTypeControl = this.potionForm.get('potionEffectType');

  potionNameControl.valueChanges.pipe(debounceTime(1000)).subscribe(() => this.potionNameValidityCheck(potionNameControl));
  potionStrengthControl.valueChanges.subscribe(() => this.potionStrengthValidityCheck(potionStrengthControl));
  potionEffectDurationControl.valueChanges.subscribe(() => this.potionEffectDurationValidityCheck(potionEffectDurationControl));
  potionEffectTypeControl.valueChanges.subscribe(() => this.potionEffectTypeValidityCheck(potionEffectTypeControl));
}

//#region Weapon Form ValidityCheck
potionNameValidityCheck(c: AbstractControl) {
  this.potionNameErrMsg = '';
  if ((c.touched || c.dirty) && c.errors) {
    this.potionNameErrMsg = Object.keys(c.errors).map(key => this.nameErrorMessages[key]).toString();
  }
}

potionStrengthValidityCheck(c: AbstractControl) {
  this.potionStrengthErrMsg = '';
  if ((c.touched || c.dirty) && c.errors) {
    this.potionStrengthErrMsg = Object.keys(c.errors).map(key => this.strengthErrorMessages[key]).toString();
  }
}

potionEffectDurationValidityCheck(c: AbstractControl) {
  console.log(c.errors);
  this.potionEffectDurationErrMsg = '';
  if ((c.touched || c.dirty) && c.errors) {
    this.potionEffectDurationErrMsg = Object.keys(c.errors).map(key => this.effectDurationErrorMessages[key]).toString();
  }
}

potionEffectTypeValidityCheck(c: AbstractControl) {
  this.potionEffectTypeErrMsg = '';
  if ((c.touched || c.dirty) && c.errors) {
    this.potionEffectTypeErrMsg = Object.keys(c.errors).map(key => this.effectTypeErrorMessages[key]).toString();
  }
}
//#endregion Weapon Form ValidityCheck


}
