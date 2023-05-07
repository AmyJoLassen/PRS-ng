import { Component, OnInit } from "@angular/core";
import { Request } from "src/app/model/request.class";
import { LineItem } from "src/app/model/line-item.class";
import { RequestService } from "src/app/service/request.service";

@Component({
    selector: 'request-list',
    templateUrl: './request-list.component.html',
    styleUrls: ['./request-list.component.html']
})
export class RequestListComponent implements OnInit{
    pageTitle: string = "Request List"
    request: Request[] = [];
  

    constructor (private requestService: RequestService) {}

    ngOnInit() {
    this.requestService.list().subscribe(
        jr => {
            this.request = jr as Request[];
        }
    );
  }
}
