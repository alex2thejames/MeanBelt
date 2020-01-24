import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaypetComponent } from './displaypet.component';

describe('DisplaypetComponent', () => {
  let component: DisplaypetComponent;
  let fixture: ComponentFixture<DisplaypetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaypetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaypetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
