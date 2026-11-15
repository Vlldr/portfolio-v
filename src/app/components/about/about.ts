import { Component, input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
})
export class About {
  readonly bio = input.required<string>();
}
