import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader46Component } from './loader-46.component';

describe('Loader46Component', () => {
  let component: Loader46Component;
  let fixture: ComponentFixture<Loader46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader46Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
