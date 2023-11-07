import { Component, OnInit } from "@angular/core";
import { ContactsService } from "../contacts.service";

@Component({
  selector: "app-contact-home",
  styleUrls: ["./contact-home.component.css"],
  templateUrl: "./contact-home.component.html",
})
export class ContactHomeComponent implements OnInit {
  contacts: any = [];

  constructor(private contactsService: ContactsService){}

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe(data =>{
      this.contacts = data;
    })
  }

  displayedColumns: string[] = [
    "id",
    "name",
    "middlename",
    "lastname",
    "phone",
    "email"
  ];
}
