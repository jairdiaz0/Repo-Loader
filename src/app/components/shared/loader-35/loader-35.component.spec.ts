import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader35Component } from './loader-35.component';

describe('Loader35Component', () => {
  let component: Loader35Component;
  let fixture: ComponentFixture<Loader35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader35Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
