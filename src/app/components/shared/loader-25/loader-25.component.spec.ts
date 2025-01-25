import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader25Component } from './loader-25.component';

describe('Loader25Component', () => {
  let component: Loader25Component;
  let fixture: ComponentFixture<Loader25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader25Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
