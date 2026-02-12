import { Routes } from '@angular/router';
import { Body } from './Components/body/body';
import { Bodymusic } from './Components/Vistas/bodymusic/bodymusic';

export const routes: Routes = [
  { path: '', component: Body },
  { path: 'music', component: Bodymusic }
];
