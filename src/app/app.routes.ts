import { Routes } from '@angular/router';
import { Body } from './Components/body/body';
import { Bodymusic } from './Components/Vistas/bodymusic/bodymusic';
import { Bodynosotros } from './Components/Vistas/bodynosotros/bodynosotros';

export const routes: Routes = [
  { path: '', component: Body },
  { path: 'music', component: Bodymusic },
  { path: 'nosotros', component: Bodynosotros}
];
