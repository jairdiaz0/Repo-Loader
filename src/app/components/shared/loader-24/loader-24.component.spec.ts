import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader24Component } from './loader-24.component';

describe('Loader24Component', () => {
  let component: Loader24Component;
  let fixture: ComponentFixture<Loader24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
