import { Component } from '@angular/core';
import { IconService } from '../services/icon.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  providers: [IconService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(public icon: IconService) {}
  images: string[] = ['ruta/al/imagen1.jpg', 'ruta/al/imagen2.jpg', 'ruta/al/imagen3.jpg'];
  hoverStates: boolean[] = [false, false, false]; // Para controlar el estado de hover de cada imagen



}
