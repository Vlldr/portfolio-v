import { Component, input } from '@angular/core';
import { Project } from '../../portfolio.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
})
export class Projects {
  readonly projects = input.required<Project[]>();
}
