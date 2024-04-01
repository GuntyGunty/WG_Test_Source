import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Skill } from './skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
protected skillsList: Skill[] = [
    {
      id: 1,
      img: "/../../assets/img/img_1.png",
      name: "Unstoppable",
      category: "Survivability",
      grade: "Legendary Skill",
      selection: true,
      description: "Reduce engine repair time. At last mastery level gain reduced mibility with disabled engine."
    },
    {
      id: 2,
      img: "/../../assets/img/img_2.png",
      name: "Fearless",
      category: "Survivability",
      grade: "Legendary Skill",
      selection: false,
      description: "Reduce engine repair time. At last mastery level gain reduced mibility with disabled engine."
    },
    {
      id: 3,
      img: "/../../assets/img/img_2.png",
      name: "Prudent",
      category: "Survivability",
      grade: "Legendary Skill",
      selection: true,
      description: "Reduce engine repair time. At last mastery level gain reduced mibility with disabled engine."
    }
  ]

  getAllSkills(): Skill[] {
    return this.skillsList;
  }

  getSkillById(id: number): Skill | undefined {
    return this.skillsList.find(Skill => Skill.id === id);
  }
}
