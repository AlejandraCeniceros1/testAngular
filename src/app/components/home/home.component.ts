import { Component, ElementRef, ViewChild} from '@angular/core';
import { IconService } from '../../services/icon.service';
import { CarouselComponent } from '../carousel/carousel.component';
import { CasestudyComponent } from '../casestudy/casestudy.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselComponent,
    CasestudyComponent,
  ],
  providers: [IconService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  images = [
    '/assets/img/air-liquide-logo.avif',
    '/assets/img/arcelormittal-logo.avif',
    '/assets/img/danone-logo.avif',
    'src/assets/img/embraer-logo.avif',
    'src/assets/img/frisa-logo.avif',
    'src/assets/img/grupo-bimbo-logo.avif',
    'src/assets/img/karcher-logo.avif',
    'src/assets/img/la-costena-logo.avif',
  ]
  activeTab: string = 'tab1';
  tabWidth: string = '20%'; 
  linePosition: string = '15%'; 

  constructor(public icon: IconService) {}

  @ViewChild('video1') video1!: ElementRef<HTMLVideoElement>;
  @ViewChild('video2') video2!: ElementRef<HTMLVideoElement>;
  @ViewChild('video3') video3!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    this.video1.nativeElement.muted = true;
    this.video2.nativeElement.muted = true;
  }

  playVideo(video: HTMLVideoElement) {
    video.play();
  }
  
  pauseVideo(video: HTMLVideoElement) {
    video.pause();
  }
  setActiveTab(tab: string): void {
    this.activeTab = tab;
    this.calculateLinePosition();
  }

  isTabActive(tab: string): boolean {
    return this.activeTab === tab;
  }

  calculateLinePosition(): void {
    const tabWidthPercentage = 100 / 4;
    switch (this.activeTab) {
      case 'tab1':
        this.linePosition = '15%';
        break;
      case 'tab2':
        this.linePosition = 6.4 * tabWidthPercentage + '%';
        break;
      case 'tab3':
        this.linePosition = 11.25 * tabWidthPercentage + '%';
        break;
      case 'tab4':
        this.linePosition = 15.5 * tabWidthPercentage + '3%';
        break;
      default:
        this.linePosition = '0%';
        break;
    }
  }
}