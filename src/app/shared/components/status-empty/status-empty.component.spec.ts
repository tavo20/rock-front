import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusEmptyComponent } from './status-empty.component';

describe('StatusEmptyComponent', () => {
  let component: StatusEmptyComponent;
  let fixture: ComponentFixture<StatusEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusEmptyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
