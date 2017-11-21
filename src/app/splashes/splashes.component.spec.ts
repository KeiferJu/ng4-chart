import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashesComponent } from './splashes.component';

describe('SplashesComponent', () => {
  let component: SplashesComponent;
  let fixture: ComponentFixture<SplashesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
