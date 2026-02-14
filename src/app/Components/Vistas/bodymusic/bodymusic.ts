import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, ActivatedRoute } from "@angular/router";
import { MusicComponent } from '../../music/music';

@Component({
  standalone: true,
  selector: 'app-bodymusic',
  imports: [CommonModule, RouterOutlet, MusicComponent],
  templateUrl: './bodymusic.html',
  styleUrls: ['./bodymusic.css'],
})
export class Bodymusic implements AfterViewInit {

  // 👇 Inyectamos ActivatedRoute para leer el fragment (#algo)
  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {

    // 👇 Escucha si la URL tiene un fragment (ej: /music#lanzamientos)
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        // 👇 Espera un poco para asegurar que el DOM esté renderizado
        setTimeout(() => {
          // 👇 Busca el elemento con ese id y hace scroll suave
          document.getElementById(fragment)?.scrollIntoView({
            behavior: 'smooth'
          });
        }, 100);
      }
    });

  }
}
