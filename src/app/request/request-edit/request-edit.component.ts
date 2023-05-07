import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user.class';
import { LineItem } from 'src/app/model/line-item.class';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})

export class RequestEditComponent implements OnInit {
  pageTitle: string = "Request Edit";
  request!: Request;
  lineItems: LineItem[] = [];
  id: number = 0;
 
   constructor(
    private requestService: RequestService,
    private route: ActivatedRoute) {}
    
        ngOnInit() {
            this.route.params.subscribe(p => this.id = p['id']);
            this.requestService.get(this.id).subscribe(jr => this.request = jr as Request);
        }
    }

