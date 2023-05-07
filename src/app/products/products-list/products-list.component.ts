import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/model/product.class";
import { ProductService } from "src/app/service/product.service";

@Component({
    selector: 'products-list', 
    templateUrl: './products-list.component.html'
})
export class ProductListComponent implements OnInit{
    
    pageTitle: string = "Product List"
    products: Product[] = []
   
    constructor (private productService: ProductService) {}

    ngOnInit() {
        this.productService.list().subscribe(
            jr => {
                this.products = jr as Product[];
            }
        )
    }
}