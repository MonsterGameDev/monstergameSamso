import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ArmorEffects } from './armor.effects';

describe('ArmorEffects', () => {
  let actions$: Observable<any>;
  let effects: ArmorEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ArmorEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ArmorEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
