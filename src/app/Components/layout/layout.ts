import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Body } from '../body/body';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-layout',
  imports: [Header, Body, Footer ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
