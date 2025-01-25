import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader19Component } from './loader-19.component';

describe('Loader19Component', () => {
  let component: Loader19Component;
  let fixture: ComponentFixture<Loader19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader19Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
