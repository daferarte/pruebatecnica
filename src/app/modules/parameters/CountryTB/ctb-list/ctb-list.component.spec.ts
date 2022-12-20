import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTBListComponent } from './ctb-list.component';

describe('CTBListComponent', () => {
  let component: CTBListComponent;
  let fixture: ComponentFixture<CTBListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTBListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CTBListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
