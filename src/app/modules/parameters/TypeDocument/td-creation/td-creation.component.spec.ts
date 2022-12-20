import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDCreationComponent } from './td-creation.component';

describe('TDCreationComponent', () => {
  let component: TDCreationComponent;
  let fixture: ComponentFixture<TDCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TDCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TDCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
