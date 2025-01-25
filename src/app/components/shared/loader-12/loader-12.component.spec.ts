import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader12Component } from './loader-12.component';

describe('Loader12Component', () => {
  let component: Loader12Component;
  let fixture: ComponentFixture<Loader12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
