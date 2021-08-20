import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  formData: PaymentDetail = new PaymentDetail();
  list: PaymentDetail[];

  constructor(private http: HttpClient) { }

  readonly baseURl = 'http://localhost:61236/api/PaymentDetail'

  postPaymentDetail() {
    return this.http.post(this.baseURl, this.formData);
  }

  putPaymentDetail() {
    return this.http.put(`${this.baseURl}/${this.formData.paymentDetailId}`, this.formData);
  }

  deletePaymentDetail(id: number) {
    return this.http.delete(`${this.baseURl}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURl)
      .toPromise()
      .then(res =>this.list = res as PaymentDetail[]);
  }
}
