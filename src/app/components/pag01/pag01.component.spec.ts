import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pag01Component } from './pag01.component';

describe('Pag01Component', () => {
  let component: Pag01Component;
  let fixture: ComponentFixture<Pag01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pag01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pag01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
