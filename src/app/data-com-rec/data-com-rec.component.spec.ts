import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataComRecComponent } from './data-com-rec.component';

describe('DataComRecComponent', () => {
  let component: DataComRecComponent;
  let fixture: ComponentFixture<DataComRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataComRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataComRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
