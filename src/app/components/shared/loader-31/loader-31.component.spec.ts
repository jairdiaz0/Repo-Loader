import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader31Component } from './loader-31.component';

describe('Loader31Component', () => {
  let component: Loader31Component;
  let fixture: ComponentFixture<Loader31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader31Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
