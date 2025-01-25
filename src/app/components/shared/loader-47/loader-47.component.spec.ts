import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader47Component } from './loader-47.component';

describe('Loader47Component', () => {
  let component: Loader47Component;
  let fixture: ComponentFixture<Loader47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader47Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
