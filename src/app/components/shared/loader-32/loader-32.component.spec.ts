import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader32Component } from './loader-32.component';

describe('Loader32Component', () => {
  let component: Loader32Component;
  let fixture: ComponentFixture<Loader32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader32Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
