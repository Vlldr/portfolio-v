import { Component, input } from '@angular/core';
import { SkillGroup } from '../../portfolio.data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
})
export class Skills {
  readonly groups = input.required<SkillGroup[]>();
}
