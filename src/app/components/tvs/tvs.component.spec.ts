import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvsComponent } from './tvs.component';

describe('TvsComponent', () => {
  let component: TvsComponent;
  let fixture: ComponentFixture<TvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
