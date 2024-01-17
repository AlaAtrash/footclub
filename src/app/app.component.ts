import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component'
import { ContactComponent } from './contact/contact.component'; 
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { HomeComponent } from './home/home.component'
import { ContactComponent } from './contact/contact.component'; 
=======
>>>>>>> 81fe02d (first commit)
=======
import { HomeComponent } from './home/home.component'
import { ContactComponent } from './contact/contact.component'; 
>>>>>>> 3498dea ([skip ci]feat: Adding home and contact component)
>>>>>>> 82a4c1d ([skip ci]feat: Adding home and contact component)

@Component({
  selector: 'nfc-root',
  standalone: true,
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 82a4c1d ([skip ci]feat: Adding home and contact component)
  imports: [CommonModule, RouterOutlet, HomeComponent, ContactComponent],
  imports: [CommonModule, RouterOutlet],
<<<<<<< HEAD
  imports: [CommonModule, RouterOutlet],
=======
>>>>>>> 81fe02d (first commit)
=======
  imports: [CommonModule, RouterOutlet, HomeComponent, ContactComponent],
>>>>>>> 3498dea ([skip ci]feat: Adding home and contact component)
>>>>>>> 82a4c1d ([skip ci]feat: Adding home and contact component)
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'footclub';
}
