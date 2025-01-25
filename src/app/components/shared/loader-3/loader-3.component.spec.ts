import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader3Component } from './loader-3.component';

describe('Loader3Component', () => {
  let component: Loader3Component;
  let fixture: ComponentFixture<Loader3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
