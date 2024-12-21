import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatdialogconfirmComponent } from './matdialogconfirm.component';

describe('MatdialogconfirmComponent', () => {
  let component: MatdialogconfirmComponent;
  let fixture: ComponentFixture<MatdialogconfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatdialogconfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatdialogconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
