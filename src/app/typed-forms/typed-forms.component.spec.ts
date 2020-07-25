import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypedFormsComponent } from './typed-forms.component';

describe('TypedFormsComponent', () => {
  let component: TypedFormsComponent;
  let fixture: ComponentFixture<TypedFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypedFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypedFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
