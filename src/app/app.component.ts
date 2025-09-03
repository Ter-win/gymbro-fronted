import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'GymBro';
}
