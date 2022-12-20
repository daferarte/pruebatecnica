import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTBCreationComponent } from './ctb-creation.component';

describe('CTBCreationComponent', () => {
  let component: CTBCreationComponent;
  let fixture: ComponentFixture<CTBCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTBCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CTBCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
