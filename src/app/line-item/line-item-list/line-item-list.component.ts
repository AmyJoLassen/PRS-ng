import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/model/line-item.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-line-item-list',
  templateUrl: './line-item-list.component.html',
  styleUrls: ['./line-item-list.component.css']
})
export class LineItemListComponent {
  title: string = "Line Items"
  lineItems: any[] = [

    {
      "request": null,
      "product": {
          "id": 1,
          "partNbr": "CCC-1234",
          "name": "Coca-Cola Classic 12 pack",
          "price": 9.99,
          "unit": "each",
          "photoPath": null,
          "vendor": {
              "id": 1,
              "code": "CODE-1234",
              "name": "Wally World",
              "address": "123 Capitalism Lane",
              "city": "Cincinnati",
              "state": "OH",
              "zip": "45202",
              "phone": "9375551234",
              "email": "customercare@wallyworld.net"
          }
      },
      "quantity": 5,
      "id": 1
  },
  ]
 

}
