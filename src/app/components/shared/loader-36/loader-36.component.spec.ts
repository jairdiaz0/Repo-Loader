import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader36Component } from './loader-36.component';

describe('Loader36Component', () => {
  let component: Loader36Component;
  let fixture: ComponentFixture<Loader36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader36Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
