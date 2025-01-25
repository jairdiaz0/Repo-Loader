import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader34Component } from './loader-34.component';

describe('Loader34Component', () => {
  let component: Loader34Component;
  let fixture: ComponentFixture<Loader34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader34Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
