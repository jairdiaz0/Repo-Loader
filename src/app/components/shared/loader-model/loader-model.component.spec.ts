import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderModelComponent } from './loader-model.component';

describe('LoaderModelComponent', () => {
  let component: LoaderModelComponent;
  let fixture: ComponentFixture<LoaderModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
