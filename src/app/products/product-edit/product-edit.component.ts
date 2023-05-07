import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/model/product.class";
import { ProductService } from "src/app/service/product.service";
import { ActivatedRoute } from "@angular/router";
import { vendor } from "src/app/model/vendor.class";
import { VendorService } from "src/app/service/vendor.service";

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.css']
})

export class ProductEditComponent implements OnInit{
    pageTitle: string = "Product Edit";
    product!: Product;
    vendor: vendor[] = [];
    id: number = 0;

    constructor(
        private productService: ProductService,
        private vendorService: VendorService,
        private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.subscribe(p => this.id = p['id']);
        this.productService.get(this.id).subscribe(jr => this.product = jr as Product);

        this.vendorService.list().subscribe(jr => this.vendor = jr as unknown as vendor[]);
    }
}