import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipBtn } from './flip-btn';

describe('FlipBtn', () => {
  let component: FlipBtn;
  let fixture: ComponentFixture<FlipBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlipBtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipBtn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
