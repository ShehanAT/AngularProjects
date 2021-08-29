import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastMsgWithImageComponent } from './toast-msg-with-image.component';

describe('ToastMsgWithImageComponent', () => {
  let component: ToastMsgWithImageComponent;
  let fixture: ComponentFixture<ToastMsgWithImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastMsgWithImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastMsgWithImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
