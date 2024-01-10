import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ContactComponent } from './contact/contact.component'; 

@Component({
  selector: 'nfc-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, ContactComponent],
  imports: [CommonModule, RouterOutlet],
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'footclub';
}
