import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Body } from '../body/body';

@Component({
  selector: 'app-layout',
  imports: [Header, Body ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
