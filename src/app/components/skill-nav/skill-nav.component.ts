import { Component, Input } from '@angular/core';
import { Skill } from '../../skill';

@Component({
  selector: 'app-skill-nav',
  standalone: true,
  imports: [],
  templateUrl: './skill-nav.component.html',
  styleUrl: './skill-nav.component.scss'
})
export class SkillNavComponent {
  @Input() skill!: Skill;
}
