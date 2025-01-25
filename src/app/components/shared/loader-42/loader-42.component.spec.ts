import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader42Component } from './loader-42.component';

describe('Loader42Component', () => {
  let component: Loader42Component;
  let fixture: ComponentFixture<Loader42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader42Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
