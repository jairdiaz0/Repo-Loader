import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader9Component } from './loader-9.component';

describe('Loader9Component', () => {
  let component: Loader9Component;
  let fixture: ComponentFixture<Loader9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
