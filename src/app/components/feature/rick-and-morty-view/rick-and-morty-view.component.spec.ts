import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickAndMortyViewComponent } from './rick-and-morty-view.component';

describe('RickAndMortyViewComponent', () => {
  let component: RickAndMortyViewComponent;
  let fixture: ComponentFixture<RickAndMortyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickAndMortyViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickAndMortyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
