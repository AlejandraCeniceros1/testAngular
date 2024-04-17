import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() images: string[] = [];
  
  currentIndex = 0;
  interval: any;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.next();
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}