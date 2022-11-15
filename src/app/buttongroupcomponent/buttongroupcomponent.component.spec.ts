import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtongroupcomponentComponent } from './buttongroupcomponent.component';

describe('ButtongroupcomponentComponent', () => {
  let component: ButtongroupcomponentComponent;
  let fixture: ComponentFixture<ButtongroupcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtongroupcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtongroupcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
