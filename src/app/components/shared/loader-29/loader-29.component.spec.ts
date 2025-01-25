import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader29Component } from './loader-29.component';

describe('Loader29Component', () => {
  let component: Loader29Component;
  let fixture: ComponentFixture<Loader29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader29Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
