import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader6Component } from './loader-6.component';

describe('Loader6Component', () => {
  let component: Loader6Component;
  let fixture: ComponentFixture<Loader6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
