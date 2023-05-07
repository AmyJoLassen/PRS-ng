import { Component } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  pageTitle: String = "Create New Product";
  product: any =

  {
    "id": 58,
    "partNbr": "FRAN",
    "name": "Frankincense",
    "price": 111.51,
    "unit": "each",
    "photoPath": null,
    "vendorId": 11,
    "vendor": {
      "id": 11,
      "code": "YL",
      "name": "Young Living Oils",
      "address": "1538 W Sandalwood Drive",
      "city": "Lehi",
      "state": "UT",
      "zip": "84043",
      "phone": "8003713515",
      "email": "support@youngliving.com"
    }
  }
}
