import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticOneComponent } from './statistic-one.component';

describe('StatisticOneComponent', () => {
  let component: StatisticOneComponent;
  let fixture: ComponentFixture<StatisticOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
