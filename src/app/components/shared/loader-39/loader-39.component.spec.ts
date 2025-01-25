import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader39Component } from './loader-39.component';

describe('Loader39Component', () => {
  let component: Loader39Component;
  let fixture: ComponentFixture<Loader39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader39Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
