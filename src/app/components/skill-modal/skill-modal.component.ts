import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillPropertyComponent } from '../skill-property/skill-property.component';
import { Skill } from '../../skill';

@Component({
  selector: 'app-skill-modal',
  standalone: true,
  imports: [CommonModule,
            SkillPropertyComponent],
  templateUrl: './skill-modal.component.html',
  styleUrl: './skill-modal.component.scss'
})
export class SkillModalComponent {
  @Input() skill!: Skill;
}
