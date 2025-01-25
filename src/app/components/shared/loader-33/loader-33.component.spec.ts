import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader33Component } from './loader-33.component';

describe('Loader33Component', () => {
  let component: Loader33Component;
  let fixture: ComponentFixture<Loader33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader33Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
