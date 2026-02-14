import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // 👈 Importamos ActivatedRoute para leer el fragment (#id)
import { FlipBtn } from '../flip-btn/flip-btn';
import { Artis } from '../artis/artis';
import { MusicComponent } from "../music/music";
import { Bodynosotros } from '../Vistas/bodynosotros/bodynosotros';

@Component({
  selector: 'app-body',
  imports: [FlipBtn, Artis, Bodynosotros],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body implements AfterViewInit {

  @ViewChild('bannerVideo') videoRef!: ElementRef<HTMLVideoElement>;

  // 👇 Inyectamos ActivatedRoute para poder detectar el fragment de la URL
  constructor(private route: ActivatedRoute) {}

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

    // 👇 Escuchamos si la URL tiene un fragment (ej: #artistas)
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        // 👇 Busca el elemento con ese id y hace scroll suave hasta él
        document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  onVideoEnd(event: Event) {
    const video = event.target as HTMLVideoElement;
    video.currentTime = video.duration;
    video.pause();
  }

}
