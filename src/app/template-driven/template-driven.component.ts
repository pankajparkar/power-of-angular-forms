import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poaf-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  model: any = {};
  required: any = false;

  constructor() { }

  ngOnInit(): void {
    this.model = {
      firstName: 'Pankaj',
      lastName: 'Parkar',
      email: 'parkar@sd.com',
      address: {
        address1: '1 ave',
        address2: 'test',
        city: 'Mumbai',
        state: 'MH',
        postalCode: 23423
      },
      languages: []
    }
  }

  markAllRequired() {
    this.required = true;
  }

  addLanguage() {
    this.model.languages.push({
      language: ''
    });
  }

  submit(form) {
    console.log(form.values);
  }

}
