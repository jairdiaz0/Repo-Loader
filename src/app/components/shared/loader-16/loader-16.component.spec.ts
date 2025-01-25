import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader16Component } from './loader-16.component';

describe('Loader16Component', () => {
  let component: Loader16Component;
  let fixture: ComponentFixture<Loader16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader16Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
