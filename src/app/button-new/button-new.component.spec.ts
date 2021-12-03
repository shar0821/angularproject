import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNewComponent } from './button-new.component';

describe('ButtonNewComponent', () => {
  let component: ButtonNewComponent;
  let fixture: ComponentFixture<ButtonNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
