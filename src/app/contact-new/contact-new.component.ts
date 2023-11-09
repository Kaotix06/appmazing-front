import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css']
})
export class ContactNewComponent implements OnInit {
  name: string;
  middlename: string;
  lastname: string;
  phone: string;
  email: string;
  
  constructor(private router: Router, private contactsService: ContactsService) { }

  ngOnInit() {
  }

  newContact(){
    const contact = {
      name: this.name,
      middlename: this.middlename,
      lastname: this.lastname,
      phone: this.phone,
      email: this.email
    }
    this.contactsService.newContact(contact);
    this.navigateToHome();
  }

  cancelInsert(){
    this.navigateToHome();
  }

  navigateToHome(){
    this.router.navigate(['/contacts']);
  }

}
