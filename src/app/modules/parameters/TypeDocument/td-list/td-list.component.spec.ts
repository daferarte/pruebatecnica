import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDListComponent } from './td-list.component';

describe('TDListComponent', () => {
  let component: TDListComponent;
  let fixture: ComponentFixture<TDListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TDListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TDListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
