import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { tap } from 'rxjs/operators';

export enum DonationFrequency {
  ONCE = 'ONCE',
  MONTHLY = 'MONTHLY'
}

export enum PaymentMethod {
  CREDIT_CARD = 'CREDIT_CARD',
  PAYPAL = 'PAYPAL'
}

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {
  DonationFrequency = DonationFrequency;
  PaymentMethod = PaymentMethod;

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