import { Component } from '@angular/core';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent {
  pageTitle: String = "Request Details";
  id: number = 0;
  request: any =

  {
    "id": 0,
    "description": "string",
    "justification": "string",
    "rejectionReason": "string",
    "deliveryMode": "string",
    "submittedDate": "2023-04-29T01:48:15.546Z",
    "dateNeeded": "2023-04-29T01:48:15.546Z",
    "status": "string",
    "total": 0,
    "user": {
      "id": 0,
      "username": "amy",
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
