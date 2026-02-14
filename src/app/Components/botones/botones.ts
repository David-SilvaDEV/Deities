import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [RouterModule], // 👈 AQUÍ ES DONDE VA
  templateUrl: './botones.html',
  styleUrls: ['./botones.css']
})
export class Botones {}
