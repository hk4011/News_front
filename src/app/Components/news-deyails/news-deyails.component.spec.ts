import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDeyailsComponent } from './news-deyails.component';

describe('NewsDeyailsComponent', () => {
  let component: NewsDeyailsComponent;
  let fixture: ComponentFixture<NewsDeyailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsDeyailsComponent]
    });
    fixture = TestBed.createComponent(NewsDeyailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
