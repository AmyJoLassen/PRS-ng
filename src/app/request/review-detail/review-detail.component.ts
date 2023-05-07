import { Component } from '@angular/core';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent {
  pageTitle: string = "Review Detail";
  requests: any =

    {
      "id": 23,
      "description": "New Customer Order",
      "justification": "new order",
      "rejectionReason": null,
      "deliveryMode": "USPS",
      "submittedDate": "2023-04-29T01:48:15.546Z",
      "dateNeeded": "2023-04-29T01:48:15.546Z",
      "status": "Review",
      "total": 289.00,
      "user": {
        "id": 2,
        "username": "string",
        "password": "string",
        "firstname": "string",
        "lastname": "string",
        "phone": "string",
        "email": "string",
        "isReviewer": true,
        "isAdmin": true
      }
    }
}
