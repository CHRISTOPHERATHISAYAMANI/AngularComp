import { Component, OnInit } from '@angular/core';
import {Headers, RequestOptions} from '@angular/http';
import { Form, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ModelDrivenService } from '../modelDrivenForm/model-driven.service';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {
regForm: FormGroup;
depart = ['Mech', 'ECE', 'IT', 'MBA', 'MCA'];
  constructor(private builder: FormBuilder, private modelServ: ModelDrivenService) { }

  ngOnInit() {
    this.regForm = this.builder.group({
      'fullName': new FormControl('', Validators.required),
      'dateOfBirth': new FormControl('', Validators.required),
      'gender': new FormControl('', Validators.required),
      'department': new FormControl(),
      'college': new FormControl(),
      'city': new FormControl(),
      'contactNo': new FormGroup({
        'mobileNo': new FormControl(),
        'landLine': new FormControl()
      })
    });
  }
submit(formData) {
  console.log(formData);
  const hd = new Headers({ 'Content-Type': 'application/json' });

const options = new RequestOptions({ headers: hd });

this.modelServ.addForm(formData, options).subscribe(res =>
console.log('Added', res));
}
}
