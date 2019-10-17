import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolloptComponent } from './pollopt.component';

describe('PolloptComponent', () => {
  let component: PolloptComponent;
  let fixture: ComponentFixture<PolloptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolloptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolloptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
