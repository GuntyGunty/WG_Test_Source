import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillPropertyComponent } from './skill-property.component';

describe('SkillPropertyComponent', () => {
  let component: SkillPropertyComponent;
  let fixture: ComponentFixture<SkillPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillPropertyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
