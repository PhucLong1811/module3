/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UndoneprojectComponent } from './undoneproject.component';

describe('UndoneprojectComponent', () => {
  let component: UndoneprojectComponent;
  let fixture: ComponentFixture<UndoneprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndoneprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndoneprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
