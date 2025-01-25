import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader4Component } from './loader-4.component';

describe('Loader4Component', () => {
  let component: Loader4Component;
  let fixture: ComponentFixture<Loader4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
