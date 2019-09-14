import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskRowComponent } from './ask-row.component';

describe('AskRowComponent', () => {
  let component: AskRowComponent;
  let fixture: ComponentFixture<AskRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
