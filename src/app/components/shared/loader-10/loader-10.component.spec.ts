import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader10Component } from './loader-10.component';

describe('Loader10Component', () => {
  let component: Loader10Component;
  let fixture: ComponentFixture<Loader10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
