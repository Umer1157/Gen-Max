import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvalabilityFormComponent } from './avalability-form.component';

describe('AvalabilityFormComponent', () => {
  let component: AvalabilityFormComponent;
  let fixture: ComponentFixture<AvalabilityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvalabilityFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvalabilityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
