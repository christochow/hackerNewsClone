import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskShowComponent } from './ask-show.component';

describe('AskShowComponent', () => {
  let component: AskShowComponent;
  let fixture: ComponentFixture<AskShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
