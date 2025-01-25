import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader8Component } from './loader-8.component';

describe('Loader8Component', () => {
  let component: Loader8Component;
  let fixture: ComponentFixture<Loader8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
