import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSelectChildrenComponent } from './ngx-select-children.component';

describe('NgxSelectChildrenComponent', () => {
  let component: NgxSelectChildrenComponent;
  let fixture: ComponentFixture<NgxSelectChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSelectChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSelectChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
