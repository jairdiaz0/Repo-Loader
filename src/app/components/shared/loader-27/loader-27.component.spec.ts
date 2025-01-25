import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader27Component } from './loader-27.component';

describe('Loader27Component', () => {
  let component: Loader27Component;
  let fixture: ComponentFixture<Loader27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader27Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
