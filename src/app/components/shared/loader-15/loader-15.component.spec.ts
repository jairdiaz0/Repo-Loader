import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader15Component } from './loader-15.component';

describe('Loader15Component', () => {
  let component: Loader15Component;
  let fixture: ComponentFixture<Loader15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
