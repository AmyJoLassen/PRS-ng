import { Component, OnInit } from "@angular/core";
import { vendor } from "src/app/model/vendor.class";
import { VendorService } from "src/app/service/vendor.service";

@Component({
    selector: 'vendor-list',
    templateUrl: './vendor-list.component.html',
    styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit{
    pageTitle: string = "Vendors List" 
    vendors: vendor[] = [];

    constructor (private vendorService: VendorService) {}

    ngOnInit() {
        this.vendorService.list().subscribe(
            jr => {
                this.vendors = jr as vendor[];
            }
        )
    }
}
