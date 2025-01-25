import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader41Component } from './loader-41.component';

describe('Loader41Component', () => {
  let component: Loader41Component;
  let fixture: ComponentFixture<Loader41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader41Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
