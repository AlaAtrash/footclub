import { Component } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
    selector: 'nfc-contact',
    standalone: true,
    templateUrl: './contact.component.html',        
    styleUrl: './contact.component.css',
    imports: [ReactiveFormsModule],
})
export class ContactComponent {
    profileForm = new FormGroup({
    name : new FormControl(''),
    firstname : new FormControl(''),
});
onSubmit() {
   
    console.warn(this.profileForm.value);
  }
}


