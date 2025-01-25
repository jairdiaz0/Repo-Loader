import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader21Component } from './loader-21.component';

describe('Loader21Component', () => {
  let component: Loader21Component;
  let fixture: ComponentFixture<Loader21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader21Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
