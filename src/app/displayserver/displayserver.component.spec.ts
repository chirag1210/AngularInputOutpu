import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayserverComponent } from './displayserver.component';

describe('DisplayserverComponent', () => {
  let component: DisplayserverComponent;
  let fixture: ComponentFixture<DisplayserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayserverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
