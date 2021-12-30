import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Person } from 'src/app/core/models/person';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './person-form-dialog.component.html',
  styleUrls: ['./person-form-dialog.component.scss']
})
export class PersonFormDialogComponent implements OnInit {
  formInstance: FormGroup;

  constructor(public dialogRef: MatDialogRef<PersonFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Person) {
    this.formInstance = new FormGroup({
      "idRecord":  new FormControl('', Validators.required),
      "patientId": new FormControl('', Validators.required),
      "patientName": new FormControl('', Validators.required),
      "startIn": new FormControl('', Validators.required),
      "startOut": new FormControl('', Validators.required),
      "reason": new FormControl('', Validators.required),
      "doctorName": new FormControl('', Validators.required),
      "treatmentMethods": new FormControl('', Validators.required),
      // "age": new FormControl('', Validators.required),
      // "job": new FormControl('', Validators.required),
    });

    this.formInstance.setValue(data);
  }

  ngOnInit(): void {
  }

  save(): void {
    console.log(this.formInstance.value);
    this.dialogRef.close(Object.assign(new Person(),this.formInstance.value));
  }
}
