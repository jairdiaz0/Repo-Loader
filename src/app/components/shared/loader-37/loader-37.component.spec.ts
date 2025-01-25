import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader37Component } from './loader-37.component';

describe('Loader37Component', () => {
  let component: Loader37Component;
  let fixture: ComponentFixture<Loader37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader37Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
