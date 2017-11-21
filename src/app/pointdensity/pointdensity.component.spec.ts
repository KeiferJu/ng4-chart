import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointdensityComponent } from './pointdensity.component';

describe('PointdensityComponent', () => {
  let component: PointdensityComponent;
  let fixture: ComponentFixture<PointdensityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointdensityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointdensityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
