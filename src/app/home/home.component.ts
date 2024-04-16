import { Component, ElementRef, ViewChild} from '@angular/core';
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
  
}
