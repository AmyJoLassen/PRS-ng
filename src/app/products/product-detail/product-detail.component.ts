import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  pageTitle: String = "Product Details";
  product!: Product;
  id: number = 0; 
  
  constructor ( 
    private productService: ProductService,
    private route: ActivatedRoute) {}

    ngOnInit () {
      this.route.params.subscribe(params => this.id = params['id']);
      this.productService.get(this.id).subscribe(
        jr => (this.product = jr as Product)
      );
    }
}
