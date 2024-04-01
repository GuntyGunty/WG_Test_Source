import { Component, Input } from '@angular/core';
import { Skill } from '../../skill';

@Component({
  selector: 'app-skill-property',
  standalone: true,
  imports: [],
  templateUrl: './skill-property.component.html',
  styleUrl: './skill-property.component.scss'
})
export class SkillPropertyComponent {
  @Input() skill!: Skill;
}
