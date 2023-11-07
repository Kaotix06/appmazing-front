import { Component } from "@angular/core";

export interface Contact {
  id: number;
  name: string;
  middlename: string;
  lastname: string;
  phone: string;
  email: string;
}

const ELEMENT_DATA: Contact[] = [
  {
    id: 1,
    name: "Néstor",
    middlename: "Riveiro",
    lastname: "Martínez",
    phone: "659513549",
    email: "nestor_rm06@hotmail.com",
  },
]

@Component({
  selector: "app-contact-home",
  styleUrls: ["./contact-home.component.css"],
  templateUrl: "./contact-home.component.html",
})
export class ContactHomeComponent {
  displayedColumns: string[] = ["id", "name", "middlename", "lastname", "phone", "email"];
  dataSource = ELEMENT_DATA;
}
