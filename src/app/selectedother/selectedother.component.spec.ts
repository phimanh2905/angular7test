import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedotherComponent } from './selectedother.component';

describe('SelectedotherComponent', () => {
  let component: SelectedotherComponent;
  let fixture: ComponentFixture<SelectedotherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedotherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
