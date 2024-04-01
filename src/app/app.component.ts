import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillModalComponent } from './components/skill-modal/skill-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            SkillsComponent,
            SkillModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wg-test';
}
