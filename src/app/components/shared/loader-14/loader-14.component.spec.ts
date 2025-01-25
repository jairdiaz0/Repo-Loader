import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader14Component } from './loader-14.component';

describe('Loader14Component', () => {
  let component: Loader14Component;
  let fixture: ComponentFixture<Loader14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
