import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResttestComponent } from './resttest.component';

describe('ResttestComponent', () => {
  let component: ResttestComponent;
  let fixture: ComponentFixture<ResttestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResttestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
