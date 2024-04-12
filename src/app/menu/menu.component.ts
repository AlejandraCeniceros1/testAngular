import { CommonModule } from '@angular/common';
import { IconService } from '../services/icon.service';
import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  providers: [IconService],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MenuComponent {
  constructor(public icon: IconService) {}
  isMenuOpen: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const navbar = document.querySelector('.navbar');

    if (navbar instanceof HTMLElement) {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        navbar.style.backgroundImage = 'linear-gradient(to right, #223881, #1E3A87)';
      } else {
        navbar.style.backgroundImage = 'linear-gradient(to right, #192960, #29449F)'  ;
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
