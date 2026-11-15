import { Component, signal } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Navbar } from './components/navbar/navbar';
import { About } from './components/about/about';
import { Education } from './components/education/education';
import { Experience } from './components/experience/experience';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { portfolio } from './portfolio.data';

@Component({
  imports: [Navbar, Hero, About, Education, Experience, Skills, Projects, Contact, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portfolio');
  protected readonly portfolio = portfolio;
}
