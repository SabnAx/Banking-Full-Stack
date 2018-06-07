import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptesAddComponent } from './comptes-add.component';

describe('ComptesAddComponent', () => {
  let component: ComptesAddComponent;
  let fixture: ComponentFixture<ComptesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
