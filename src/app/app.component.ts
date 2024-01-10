import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component'
import { ContactComponent } from './contact/contact.component'; 
=======
>>>>>>> 81fe02d (first commit)

@Component({
  selector: 'nfc-root',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, RouterOutlet, HomeComponent, ContactComponent],
=======
  imports: [CommonModule, RouterOutlet],
>>>>>>> 81fe02d (first commit)
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'footclub';
}
