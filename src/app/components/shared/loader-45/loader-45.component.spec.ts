import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader45Component } from './loader-45.component';

describe('Loader45Component', () => {
  let component: Loader45Component;
  let fixture: ComponentFixture<Loader45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader45Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
