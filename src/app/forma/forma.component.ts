import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forma',
  templateUrl: './forma.component.html',
  styleUrls: ['./forma.component.css']
})
export class FormaComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      ime: ['', Validators.required],
      prezime: ['', Validators.required],
      brIndeksa: ['', Validators.required]
    });
  }

  indeksValidation(index: string): boolean {
    var pomIndex: number = parseInt(index);
    if (!Number.isNaN(pomIndex)) {
      if (pomIndex < 1000 || pomIndex > 9999) {
        this.angForm.setErrors({'mismatched': true})
        return false;
      }
    } else {
      this.angForm.setErrors({'mismatched': true})
      return false;
    }
    return true;
  }

  ngOnInit(): void {
  }

}
