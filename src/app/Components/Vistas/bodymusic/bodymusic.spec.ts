import { ComponentFixture, TestBed } from '@angular/core/testing'

import { Bodymusic } from './bodymusic';

describe('Bodymusic', () => {
  let component: Bodymusic;
  let fixture: ComponentFixture<Bodymusic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bodymusic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bodymusic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
