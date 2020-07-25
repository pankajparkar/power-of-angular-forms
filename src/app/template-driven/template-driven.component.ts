import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poaf-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  firstName;
  lastName;
  email;
  address;
  address2;
  city;
  state;
  postalCode;

  constructor() { }

  ngOnInit(): void {
  }

  submit(form) {
    console.log(form.values);
  }

}
