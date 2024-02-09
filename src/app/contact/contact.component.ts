import { Component } from '@angular/core';
import {  FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'nfc-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    imports: [ReactiveFormsModule],
})
export class ContactComponent {
    profileForm = new FormGroup({
    firstName: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    telephone: new FormControl(''),

});
}


