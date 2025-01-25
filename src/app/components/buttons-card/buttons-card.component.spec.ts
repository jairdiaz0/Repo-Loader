import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsCardComponent } from './buttons-card.component';

describe('ButtonsCardComponent', () => {
  let component: ButtonsCardComponent;
  let fixture: ComponentFixture<ButtonsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
