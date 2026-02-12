import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";
import { MusicComponent } from '../../music/music';

@Component({
  standalone: true,
  selector: 'app-bodymusic',
  imports: [CommonModule, RouterOutlet, MusicComponent ],
  templateUrl: './bodymusic.html',
  styleUrls: ['./bodymusic.css'], // 👈 CORRECTO
})
export class Bodymusic {}
