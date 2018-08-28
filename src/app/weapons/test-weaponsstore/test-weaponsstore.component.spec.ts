import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWeaponsstoreComponent } from './test-weaponsstore.component';

describe('TestWeaponsstoreComponent', () => {
  let component: TestWeaponsstoreComponent;
  let fixture: ComponentFixture<TestWeaponsstoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWeaponsstoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWeaponsstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
