import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader18Component } from './loader-18.component';

describe('Loader18Component', () => {
  let component: Loader18Component;
  let fixture: ComponentFixture<Loader18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader18Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
