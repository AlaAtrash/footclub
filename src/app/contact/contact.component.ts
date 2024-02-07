import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'nfc-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
})
export class ContactComponent {

}

export class ProfileEditorComponent {
    profileForm = new FormGroup({
    name: new FormControl(''),
    firstmame: new FormControl(''),
    email: new FormControl(''),
    telephone: new FormControl(''),
    
    });
}
