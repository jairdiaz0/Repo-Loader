import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader7Component } from './loader-7.component';

describe('Loader7Component', () => {
  let component: Loader7Component;
  let fixture: ComponentFixture<Loader7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
