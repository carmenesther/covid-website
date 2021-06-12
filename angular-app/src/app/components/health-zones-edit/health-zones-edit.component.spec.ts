import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthZonesEditComponent } from './health-zones-edit.component';

describe('HealthZonesEditComponent', () => {
  let component: HealthZonesEditComponent;
  let fixture: ComponentFixture<HealthZonesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthZonesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthZonesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
