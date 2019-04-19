import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	namePlaceholder: string = "John Doe";
	numberPlaceholder: string = "+91-9874561230";
	btnTxt: string = "Add Contact";

	contactFname: string = "John";
	contactLname: string = "doe";
	contacts = [];

  	constructor() { }

	ngOnInit() {

	}

    addContact() {
	  	this.contacts.push(this.contactFname);
	  	this.contactFname = "";
    }
}
