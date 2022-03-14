import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGalaComponent } from './list-gala.component';

describe('ListGalaComponent', () => {
  let component: ListGalaComponent;
  let fixture: ComponentFixture<ListGalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
