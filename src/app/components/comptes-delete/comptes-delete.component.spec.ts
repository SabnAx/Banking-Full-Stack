import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptesDeleteComponent } from './comptes-delete.component';

describe('ComptesDeleteComponent', () => {
  let component: ComptesDeleteComponent;
  let fixture: ComponentFixture<ComptesDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptesDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
