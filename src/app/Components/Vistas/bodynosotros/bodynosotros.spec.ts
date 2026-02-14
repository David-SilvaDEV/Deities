import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bodynosotros } from './bodynosotros';

describe('Bodynosotros', () => {
  let component: Bodynosotros;
  let fixture: ComponentFixture<Bodynosotros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bodynosotros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bodynosotros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
