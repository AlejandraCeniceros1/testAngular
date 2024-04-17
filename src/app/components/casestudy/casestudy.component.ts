import { Component } from '@angular/core';
import { IconService } from '../../services/icon.service';


@Component({
  selector: 'app-casestudy',
  standalone: true,
  imports: [],
  providers: [IconService],

  templateUrl: './casestudy.component.html',
  styleUrl: './casestudy.component.css'
})

export class CasestudyComponent {

  currentIndex = 0;
  slides = ['slide1', 'slide2', 'slide3'];

  constructor(public icon: IconService) {}

  prevSlide() {
    this.currentIndex = (this.currentIndex === 0) ? this.slides.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex === this.slides.length - 1) ? 0 : this.currentIndex + 1;
  }
}
