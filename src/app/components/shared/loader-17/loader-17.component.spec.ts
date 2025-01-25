import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader17Component } from './loader-17.component';

describe('Loader17Component', () => {
  let component: Loader17Component;
  let fixture: ComponentFixture<Loader17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader17Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
