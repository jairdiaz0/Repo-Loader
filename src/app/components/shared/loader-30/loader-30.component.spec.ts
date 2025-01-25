import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader30Component } from './loader-30.component';

describe('Loader30Component', () => {
  let component: Loader30Component;
  let fixture: ComponentFixture<Loader30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader30Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
