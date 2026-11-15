import { Component, input } from '@angular/core';
import { ContactLink } from '../../portfolio.data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
})
export class Contact {
  readonly links = input.required<ContactLink[]>();
}
