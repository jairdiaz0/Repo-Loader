import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader40Component } from './loader-40.component';

describe('Loader40Component', () => {
  let component: Loader40Component;
  let fixture: ComponentFixture<Loader40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader40Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
