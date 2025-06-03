import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayaoutComponent } from './layaout.component';

describe('LayaoutComponent', () => {
  let component: LayaoutComponent;
  let fixture: ComponentFixture<LayaoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayaoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayaoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
