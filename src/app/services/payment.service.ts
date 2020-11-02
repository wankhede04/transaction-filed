import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICardDetails, IHttpResponse } from '../models/card-details.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  public paymentCardDetail: ICardDetails;

  constructor(private http: HttpClient) {}

  public createPayment(payload: ICardDetails): Observable<IHttpResponse> {
    return this.http.post<IHttpResponse>(
      `${environment.serverUrl}`,
      payload
    );
  }
}
