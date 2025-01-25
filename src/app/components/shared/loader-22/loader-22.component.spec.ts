import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader22Component } from './loader-22.component';

describe('Loader22Component', () => {
  let component: Loader22Component;
  let fixture: ComponentFixture<Loader22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader22Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
