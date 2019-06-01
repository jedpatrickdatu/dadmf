import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { tap } from 'rxjs/operators';

export interface Month {
  name: string;
  number: number;
}

export enum DonationFrequency {
  ONCE = 'ONCE',
  MONTHLY = 'MONTHLY'
}

export enum PaymentMethod {
  CREDIT_CARD = 'CREDIT_CARD',
  PAYPAL = 'PAYPAL'
}

export const NUM_YEARS_CREDIT_CARD_VALID = 16;

export const MONTHS: ReadonlyArray<Month> = [
  {
    name: 'January',
    number: 1
  },
  {
    name: 'February',
    number: 2
  },
  {
    name: 'March',
    number: 3
  },
  {
    name: 'April',
    number: 4
  },  {
    name: 'May',
    number: 5
  },
  {
    name: 'June',
    number: 6
  },
  {
    name: 'July',
    number: 7
  },
  {
    name: 'August',
    number: 8
  },
  {
    name: 'September',
    number: 9
  },  {
    name: 'October',
    number: 10
  },
  {
    name: 'November',
    number: 11
  },
  {
    name: 'December',
    number: 12
  },
];

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {
  DonationFrequency = DonationFrequency;
  MONTHS = MONTHS;
  PaymentMethod = PaymentMethod;

  creditCardExpiryYears: number[] = [];

  cities: ReadonlyArray<string> = [
    'Angeles',
    'Malolos',
    'Manila'
  ]

  states: ReadonlyArray<string> = [
    'Bulacan',
    'NCR',
    'Pampanga'
  ]
  
  donationForm = new FormGroup({
    address: new FormControl('', [
      Validators.required,
    ]),
    amount: new FormControl(500),
    creditCardNumber: new FormControl('', [
      Validators.required,
    ]),
    creditCardExpiryMonth: new FormControl('January', [
      Validators.required,
    ]),
    creditCardExpiryYear: new FormControl('', [
      Validators.required,
    ]),
    city: new FormControl('Manila', [
      Validators.required,
    ]),
    customAmount: new FormControl('', [
      Validators.required,
    ]),
    cvc: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    firstName: new FormControl(''),
    frequency: new FormControl(DonationFrequency.ONCE),
    lastName: new FormControl(''),
    paymentMethod: new FormControl(PaymentMethod.CREDIT_CARD),
    state: new FormControl('Pampanga', [
      Validators.required,
    ]),
    zipCode: new FormControl('', [
      Validators.required,
    ])
  });

  matcher = new MyErrorStateMatcher();
  
  constructor() { }

  ngOnInit() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    for (let i = 0; i < NUM_YEARS_CREDIT_CARD_VALID; i++) {
      this.creditCardExpiryYears = [
        ...this.creditCardExpiryYears,
        currentYear + i,
      ];

    }

    this.donationForm.valueChanges.pipe(
      tap(value => console.log(value)),
    );
  }

  onSubmit() {
    console.log('submit poz');
    console.log(this.donationForm.value);
  }
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}