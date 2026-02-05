import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artis } from './artis';

describe('Artis', () => {
  let component: Artis;
  let fixture: ComponentFixture<Artis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Artis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Artis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
