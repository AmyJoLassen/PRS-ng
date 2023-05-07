import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/service/system.service';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { LineItem } from 'src/app/model/line-item.class';


@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})

export class RequestReviewComponent implements OnInit {
    pageTitle: string = "Request Review"
    requests: Request[] = [
      {
        "id": 15,
        "description": "New Customer Order",
        "justification": "New Order",
        "rejectionReason": "Approved",
        "deliveryMode": "UPS",
        "submittedDate": "2023-02-25T00:00:00",
        "dateNeeded": "2023-03-25",
        "status": "Approved",
        "total": 234.55,
        "user": {
            "id": 1,
            "username": "newusername",
            "password": "newpword",
            "firstname": "Amy",
            "lastname": "Lassen",
            "phone": "5135559090",
            "email": "amos@email.com",
            "isReviewer": false,
            "isAdmin": false
        } 
      }
      ]

    lineItems: LineItem[] = [];

  constructor(
    private requestService: RequestService,
    private systemService: SystemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  request!: Request;

  ngOnInit(): void {
    // this.route.params.subscribe(parms => this.id = parms['id']);
    // this.requestService.get(this.id).subscribe(jr => this.request = jr as Request)
  }

  reject(): void {}
  approve():void{
    this.requestService.approve(this.request).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl("requests/reviewlist");},
      err => {console.log(err)}
    )
  }
  save():void{
    this.router.navigateByUrl("/requests/list");
  }
}


