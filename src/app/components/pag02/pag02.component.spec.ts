import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pag02Component } from './pag02.component';

describe('Pag02Component', () => {
  let component: Pag02Component;
  let fixture: ComponentFixture<Pag02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pag02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pag02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
