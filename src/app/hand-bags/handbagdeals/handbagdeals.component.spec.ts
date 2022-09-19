import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandbagdealsComponent } from './handbagdeals.component';

describe('HandbaddealsComponent', () => {
  let component: HandbagdealsComponent;
  let fixture: ComponentFixture<HandbagdealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandbagdealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandbagdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
