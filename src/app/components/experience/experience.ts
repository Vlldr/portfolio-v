import { Component, input } from '@angular/core';
import { Experience as ExperienceItem } from '../../portfolio.data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
})
export class Experience {
  readonly items = input.required<ExperienceItem[]>();
}
