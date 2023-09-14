import { Component } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-diagonals',
  templateUrl: './diagonals.component.html',
  styleUrls: ['./diagonals.component.scss']
})
export class DiagonalsComponent {
  circlecheck = faCheckCircle;
}
