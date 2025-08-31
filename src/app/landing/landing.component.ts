import { Component, input } from '@angular/core';
import { HeaderWelcomeComponent } from '../header-welcome/header-welcome.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-landing',
  imports: [
    HeaderWelcomeComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatCheckboxModule,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  days = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ];
  daysButton = [1, 2, 3, 4, 5, 6, 7];

  name: string | null = null;
  weight: string | null = null;

  totalTrainingDaysSelected = 0;
  isActiveCount = 0;
  isDaysDisabled = true;
  formStep = 0;

  selectedDays: boolean[] = Array(this.days.length).fill(false);

  getName(name: string): void {
    this.name = name.trim() || null;
    this.onContinue();
  }

  getWeight(weight: string | null): void {
    this.weight = weight?.trim() || null;
    this.onContinue();
  }

  getTrainingDays(days: number): void {
    this.totalTrainingDaysSelected = days;
    this.isActiveCount = 0;
    this.isDaysDisabled = true;
    this.selectedDays = Array(this.days.length).fill(false);

    if (this.formStep === 2) {
      this.onContinue();
    }
  }

  onCheckboxChange(isActive: boolean, index: number): void {
    this.selectedDays[index] = isActive;
    this.isActiveCount = this.selectedDays.filter((d) => d).length;

    this.isDaysDisabled = this.isActiveCount !== this.totalTrainingDaysSelected;
  }

  onContinue(): void {
    this.formStep++;
  }
}
