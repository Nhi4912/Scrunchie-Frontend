import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent implements OnInit {
  panelOpenState = false;
  genderList = ['Male', 'Female']
  gender: string = 'Male';
  selectGenderControl = new FormControl(this.gender);

  constructor() { }

  ngOnInit(): void {
  }

}
