import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader23Component } from './loader-23.component';

describe('Loader23Component', () => {
  let component: Loader23Component;
  let fixture: ComponentFixture<Loader23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader23Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
