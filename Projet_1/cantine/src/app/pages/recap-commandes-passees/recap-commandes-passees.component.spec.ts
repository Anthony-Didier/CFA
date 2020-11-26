import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapCommandesPasseesComponent } from './recap-commandes-passees.component';

describe('RecapCommandesPasseesComponent', () => {
  let component: RecapCommandesPasseesComponent;
  let fixture: ComponentFixture<RecapCommandesPasseesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecapCommandesPasseesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapCommandesPasseesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
