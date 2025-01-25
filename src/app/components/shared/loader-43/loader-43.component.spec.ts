import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader43Component } from './loader-43.component';

describe('Loader43Component', () => {
  let component: Loader43Component;
  let fixture: ComponentFixture<Loader43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader43Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
