import { Component } from '@angular/core';
import { Botones } from '../botones/botones';
import { HamburgerComponent } from '../hamburger/hamburger';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Botones, HamburgerComponent],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {

  menuOpen = false;

  toggleMenu(state: boolean) {
    this.menuOpen = state;
  }

}
