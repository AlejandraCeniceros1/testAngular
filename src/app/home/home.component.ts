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

  playVideo(video:ElementRef<HTMLVideoElement>){

    video.nativeElement.play();
  }

  

  pauseVideo(video:ElementRef<HTMLVideoElement>){

    video.nativeElement.pause();
  }


}
