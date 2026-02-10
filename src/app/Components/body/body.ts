import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FlipBtn } from '../flip-btn/flip-btn';
import { Artis } from '../artis/artis';

@Component({
  selector: 'app-body',
  imports: [FlipBtn, Artis],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body implements AfterViewInit {
  @ViewChild('bannerVideo') videoRef!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const video = this.videoRef.nativeElement;
    video.muted = true;
    video.load();
    
    const tryPlay = () => {
      video.play().catch(() => {});
    };

    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener('loadeddata', tryPlay, { once: true });
    }
  }

  onVideoEnd(event: Event) {
    const video = event.target as HTMLVideoElement;
    video.currentTime = video.duration;
    video.pause();
  }

  
}
