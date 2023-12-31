import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'allByMyself';

  isHomeActive: boolean = false;
  isGalleryActive: boolean = false;
  isKuteActive: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHomeActive = event.url === '/home' || event.url === '/Home';
        this.isGalleryActive = event.url === '/gallery' || event.url === '/Gallery';
        this.isKuteActive = event.url === '/kute' || event.url === '/Kute';
      }
    });
  }
}
