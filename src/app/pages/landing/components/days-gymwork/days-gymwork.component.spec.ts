import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysGymworkComponent } from './days-gymwork.component';

describe('DaysGymworkComponent', () => {
  let component: DaysGymworkComponent;
  let fixture: ComponentFixture<DaysGymworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaysGymworkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaysGymworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
