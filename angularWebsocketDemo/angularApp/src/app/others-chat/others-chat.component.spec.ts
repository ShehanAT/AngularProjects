import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersChatComponent } from './others-chat.component';

describe('OthersChatComponent', () => {
  let component: OthersChatComponent;
  let fixture: ComponentFixture<OthersChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthersChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
