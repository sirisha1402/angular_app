import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LipsticksComponent } from './lipsticks.component';

describe('LipsticksComponent', () => {
  let component: LipsticksComponent;
  let fixture: ComponentFixture<LipsticksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LipsticksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LipsticksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
