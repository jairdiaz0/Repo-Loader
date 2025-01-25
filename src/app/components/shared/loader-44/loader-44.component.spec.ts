import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader44Component } from './loader-44.component';

describe('Loader44Component', () => {
  let component: Loader44Component;
  let fixture: ComponentFixture<Loader44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader44Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
