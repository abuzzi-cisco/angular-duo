import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDuoComponent } from './login-duo.component';

describe('LoginDuoComponent', () => {
  let component: LoginDuoComponent;
  let fixture: ComponentFixture<LoginDuoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDuoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
