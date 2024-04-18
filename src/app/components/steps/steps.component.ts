import { Component } from '@angular/core';
import { IconService } from '../../services/icon.service';


@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [],
  providers: [IconService],

  templateUrl: './steps.component.html',
  styleUrl: './steps.component.css'
})
export class StepsComponent {
  constructor(public icon: IconService) {}


}
