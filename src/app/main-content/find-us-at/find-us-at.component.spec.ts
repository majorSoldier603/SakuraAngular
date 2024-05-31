import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindUsAtComponent } from './find-us-at.component';

describe('FindUsAtComponent', () => {
  let component: FindUsAtComponent;
  let fixture: ComponentFixture<FindUsAtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindUsAtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindUsAtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
