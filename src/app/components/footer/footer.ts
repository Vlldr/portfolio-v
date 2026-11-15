import { Component, input } from '@angular/core';
import { NavLink } from '../../portfolio.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class Footer {
  readonly name = input.required<string>();
  readonly links = input.required<NavLink[]>();
  protected readonly year = new Date().getFullYear();
}
