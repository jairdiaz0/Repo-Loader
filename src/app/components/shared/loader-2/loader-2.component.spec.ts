import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader2Component } from './loader-2.component';

describe('Loader2Component', () => {
  let component: Loader2Component;
  let fixture: ComponentFixture<Loader2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
