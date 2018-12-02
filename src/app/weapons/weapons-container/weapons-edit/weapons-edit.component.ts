import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-weapons-edit',
  templateUrl: './weapons-edit.component.html',
  styleUrls: ['./weapons-edit.component.scss']
})
export class WeaponsEditComponent implements OnInit {
  weaponsForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.weaponsForm = this.fb.group({
      weaponName: ['', [Validators.required, Validators.minLength(3)]],
      weaponLevel: ['', [Validators.required, Validators.min(0), Validators.max(50)]],
      weaponBaseDamage: ['', [Validators.required, Validators.min(1)]],
      weaponStats: this.fb.group({
        power: ['', [Validators.required, Validators.min(0), Validators.max(50)]],
        defense: ['', [Validators.required, Validators.min(0), Validators.max(50)]],
        damage: ['', [Validators.required, Validators.min(0), Validators.max(50)]]
      })
    });
  }

}
