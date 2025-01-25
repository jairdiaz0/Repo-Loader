import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader26Component } from './loader-26.component';

describe('Loader26Component', () => {
  let component: Loader26Component;
  let fixture: ComponentFixture<Loader26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader26Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
