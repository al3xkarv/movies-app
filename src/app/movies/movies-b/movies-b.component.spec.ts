import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesBComponent } from './movies-b.component';

describe('MoviesBComponent', () => {
  let component: MoviesBComponent;
  let fixture: ComponentFixture<MoviesBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesBComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
