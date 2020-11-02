import { Component, OnDestroy } from '@angular/core';
import { PaymentService } from '../services/payment.service';
import * as moment from 'moment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnDestroy {
  public currentDate = moment().format('YYYY-MM-DD');
  private subscription: Subscription;

  constructor(public paymentService: PaymentService ) {
    paymentService.paymentCardDetail = {
      creditCardNumber: '',
      cardholder: '',
      expirationDate: '',
      securityCode: '',
      amount: 0,
    }
  }

  public submitCardDetails() {
    this.subscription = this.paymentService.createPayment(this.paymentService.paymentCardDetail)
    .subscribe(res => {
      console.log('Success:', res);
    }, error => {
      console.log('Error:', error);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
