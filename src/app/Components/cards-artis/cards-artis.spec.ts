import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsArtis } from './cards-artis';

describe('CardsArtis', () => {
  let component: CardsArtis;
  let fixture: ComponentFixture<CardsArtis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsArtis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsArtis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
