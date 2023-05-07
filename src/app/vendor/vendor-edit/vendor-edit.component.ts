import { Component, OnInit } from "@angular/core";
import { vendor } from "src/app/model/vendor.class";
import { VendorService } from "src/app/service/vendor.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'vendor-edit',
    templateUrl: './vendor-edit.component.html',
    styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent {
    pageTitle: string = "Vendor Edit"
    vendor!: vendor;
    id: number = 0;

    constructor(
        private VendorService: VendorService,
        private route: ActivatedRoute 
     ) {}

     ngOnInit() {
        this.route.params.subscribe(parms => this.id = parms['id']);
        this.VendorService.get(this.id).subscribe(jr => this.vendor = jr as vendor)
     }
}

