import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'rick';
  private audio = new Audio();
  constructor() {
    this.audio.src = '/rick-morty/ricksound.mp3';
    this.audio.load();
  }

  wbalabadubdudb() {
    console.log('wbalabadubdudb');
    this.audio.play().catch((error) => {
      console.error('Error playing audio:', error);
    });
  }
}
