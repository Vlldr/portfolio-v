import { Component, input } from '@angular/core';
import { Education as EducationItem } from '../../portfolio.data';

@Component({
  selector: 'app-education',
  templateUrl: './education.html',
})
export class Education {
  readonly items = input.required<EducationItem[]>();
}
