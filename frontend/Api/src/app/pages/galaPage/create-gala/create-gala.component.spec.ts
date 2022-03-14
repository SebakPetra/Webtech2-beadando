import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGalaComponent } from './create-gala.component';

describe('CreateGalaComponent', () => {
  let component: CreateGalaComponent;
  let fixture: ComponentFixture<CreateGalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
