import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProfesoraiStudenataComponent } from './lista-profesorai-studenata.component';

describe('ListaProfesoraiStudenataComponent', () => {
  let component: ListaProfesoraiStudenataComponent;
  let fixture: ComponentFixture<ListaProfesoraiStudenataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProfesoraiStudenataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaProfesoraiStudenataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
