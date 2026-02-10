import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.html',
  styleUrls: ['./hamburger.css']
})
export class HamburgerComponent {

  isOpen = false;

  @Output() menuToggle = new EventEmitter<boolean>();

  toggle() {
    this.isOpen = !this.isOpen;
    this.menuToggle.emit(this.isOpen);
  }
}
