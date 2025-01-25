import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader13Component } from './loader-13.component';

describe('Loader13Component', () => {
  let component: Loader13Component;
  let fixture: ComponentFixture<Loader13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
