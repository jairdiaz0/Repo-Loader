import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader38Component } from './loader-38.component';

describe('Loader38Component', () => {
  let component: Loader38Component;
  let fixture: ComponentFixture<Loader38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader38Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
