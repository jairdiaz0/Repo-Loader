import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader11Component } from './loader-11.component';

describe('Loader11Component', () => {
  let component: Loader11Component;
  let fixture: ComponentFixture<Loader11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
