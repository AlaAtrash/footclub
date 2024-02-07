import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ContactComponent } from './contact/contact.component'; 
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";



@Component({
    selector: 'nfc-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HomeComponent, ContactComponent, HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'footclub';
}

