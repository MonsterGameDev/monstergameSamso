import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestArmorstoreComponent } from './test-armorstore.component';

describe('TestArmorstoreComponent', () => {
  let component: TestArmorstoreComponent;
  let fixture: ComponentFixture<TestArmorstoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestArmorstoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestArmorstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
