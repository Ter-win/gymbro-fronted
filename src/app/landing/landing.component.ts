import { Component, input } from '@angular/core';
import { HeaderWelcomeComponent } from '../header-welcome/header-welcome.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing',
  imports: [
    HeaderWelcomeComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  name: string | undefined;

  getName(value: string) {
    this.name = value.trim();
  }
}
