import { Component, input } from '@angular/core';
import { Profile } from '../../portfolio.data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
})
export class Hero {
  readonly profile = input.required<Profile>();
}
