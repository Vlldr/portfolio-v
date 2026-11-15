import { Component, input } from '@angular/core';
import { NavLink } from '../../portfolio.data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
})
export class Navbar {
  readonly logo = input.required<string>();
  readonly links = input.required<NavLink[]>();
}
