import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillNavComponent } from './skill-nav.component';

describe('SkillNavComponent', () => {
  let component: SkillNavComponent;
  let fixture: ComponentFixture<SkillNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
