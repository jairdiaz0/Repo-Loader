import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader20Component } from './loader-20.component';

describe('Loader20Component', () => {
  let component: Loader20Component;
  let fixture: ComponentFixture<Loader20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader20Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
