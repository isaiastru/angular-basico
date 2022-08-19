import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorcomponentComponent } from './contadorcomponent.component';

describe('ContadorcomponentComponent', () => {
  let component: ContadorcomponentComponent;
  let fixture: ComponentFixture<ContadorcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadorcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadorcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
