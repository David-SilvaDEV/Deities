import { Component } from '@angular/core';
import { Botones } from '../botones/botones';
import { HamburgerComponent } from '../hamburger/hamburger';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Botones, HamburgerComponent,RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {

  menuOpen = false;

  toggleMenu(state: boolean) {
    this.menuOpen = state;
  }

}
