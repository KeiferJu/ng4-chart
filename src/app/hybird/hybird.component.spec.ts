import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HybirdComponent } from './hybird.component';

describe('HybirdComponent', () => {
  let component: HybirdComponent;
  let fixture: ComponentFixture<HybirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HybirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HybirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
