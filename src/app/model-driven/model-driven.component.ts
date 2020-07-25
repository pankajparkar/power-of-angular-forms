import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'poaf-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.scss']
})
export class ModelDrivenComponent implements OnInit {

  // FormControl
  // FormGroup
  // FormArray
  profileForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  toggle({checked}) {
    const emailControl = this.profileForm.get('email');
    console.log(emailControl);
    if (checked) {
      // Add validator
      emailControl.setValidators([Validators.required]);
    } else {
      // remove validator
      emailControl.clearValidators();
    }
    emailControl.updateValueAndValidity();
  }

  addLanguage() {
    const languagesFormArray = this.profileForm.get('languages') as FormArray;
    const newLanguage = this.fb.group({
      language: '',
      fluency: ''
    });
    languagesFormArray.push(newLanguage);
  }

  getLanguages() {
    return (this.profileForm.get('languages') as FormArray).controls
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: ['', [Validators.required]],
      email: [''],
      address: ['', [Validators.required]],
      address2: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
      languages: this.fb.array([])
    });
  }

}
