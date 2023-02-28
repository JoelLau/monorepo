import { Component } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'monorepo-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['home-page.component.scss'],
})
export class HomePageComponent {
  // icons
  faLinkedin = faLinkedin;
}
