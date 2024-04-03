import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-house',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './house.component.html',
  styleUrl: './house.component.css'
})
export class HouseComponent {
  @Input() hasPool: boolean = false;

}
