import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { SkillModalComponent } from '../skill-modal/skill-modal.component';
import { SkillNavComponent } from '../skill-nav/skill-nav.component';
import { SkillService } from '../../skills.service';
import { Skill } from '../../skill';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule,
            NgClass,
            SkillModalComponent,
            SkillNavComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  providers: [
    SkillService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  activeIndex = 0;
  skillList: Skill[] = [];
  SkillService: SkillService = inject(SkillService);

  filteredSkillList: Skill[] = [];

  constructor() {
    this.skillList = this.SkillService.getAllSkills();
    this.filteredSkillList = this.skillList;
  }
}
