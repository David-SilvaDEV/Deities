import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { Botones } from './botones';

describe('Botones', () => {
  let component: Botones;
  let fixture: ComponentFixture<Botones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Botones,RouterModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Botones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
