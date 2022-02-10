import { Injectable } from '@angular/core';
import { PaymentDetail } from "./payment-detail.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  id:number
  constructor(private http:HttpClient) { }
  formData:PaymentDetail = new PaymentDetail
  list : PaymentDetail[];
  readonly baseUrl : "https://localhost:44346/api/PaymentDetails"
  
  postPaymentDetail(){
    debugger
    return this.http.post("https://localhost:44346/api/PaymentDetails", this.formData);
  }

  refreshList(){

    this.http.get("https://localhost:44346/api/PaymentDetails")
    .toPromise()
    .then(res => this.list = res as PaymentDetail[])
  }

  putPaymentDetail(){
    debugger
    return this.http.put("https://localhost:44346/api/PaymentDetails/"+this.formData.paymentDetailId, this.formData);
  }

  deleteRecord(id:number){
    debugger
    return this.http.delete("https://localhost:44346/api/PaymentDetails/"+id);
  }
} 
