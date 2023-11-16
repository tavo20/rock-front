import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSensorsComponent } from './home-sensors.component';

describe('HomeSensorsComponent', () => {
  let component: HomeSensorsComponent;
  let fixture: ComponentFixture<HomeSensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSensorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
