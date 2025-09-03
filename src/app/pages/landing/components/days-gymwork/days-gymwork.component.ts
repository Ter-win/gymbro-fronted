import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-days-gymwork',
  imports: [],
  templateUrl: './days-gymwork.component.html',
  styleUrl: './days-gymwork.component.scss',
})
export class DaysGymworkComponent {
  @Input() daysSelected: boolean[] = [];
}
