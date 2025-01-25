import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader28Component } from './loader-28.component';

describe('Loader28Component', () => {
  let component: Loader28Component;
  let fixture: ComponentFixture<Loader28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader28Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
