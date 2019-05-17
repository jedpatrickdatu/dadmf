import { Component, OnInit } from '@angular/core';
import { Donor } from '../donor';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.scss']
})
export class DonorsComponent implements OnInit {

  donors: ReadonlyArray<Donor> = [
    {
      id: 1,
      name: 'Chris Datu'
    },
    {
      id: 2,
      name: 'Carlo Datu'
    },
    {
      id: 1,
      name: 'David Datu'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
