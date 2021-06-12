import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthZoneByIdComponent } from './health-zone-by-id.component';

describe('HealthZoneByIdComponent', () => {
  let component: HealthZoneByIdComponent;
  let fixture: ComponentFixture<HealthZoneByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthZoneByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthZoneByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
