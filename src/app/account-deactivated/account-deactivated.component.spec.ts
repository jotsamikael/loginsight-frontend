import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDeactivatedComponent } from './account-deactivated.component';

describe('AccountDeactivatedComponent', () => {
  let component: AccountDeactivatedComponent;
  let fixture: ComponentFixture<AccountDeactivatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDeactivatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountDeactivatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
