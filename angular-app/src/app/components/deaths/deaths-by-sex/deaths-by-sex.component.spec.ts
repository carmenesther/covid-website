import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathsBySexComponent } from './deaths-by-sex.component';

describe('DeathsBySexComponent', () => {
  let component: DeathsBySexComponent;
  let fixture: ComponentFixture<DeathsBySexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeathsBySexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathsBySexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
