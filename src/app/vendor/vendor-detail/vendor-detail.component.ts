import { Component,OnInit } from "@angular/core";
import { vendor } from "src/app/model/vendor.class";
import { VendorService } from "src/app/service/vendor.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'vendor-detail',
    templateUrl: './vendor-detail.component.html',
    styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit{
    pageTitle: string = "Vendor Detail"
    vendor!: vendor;
    id!: number;

    constructor (
        private VendorService: VendorService,
        private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe(parms => this.id = parms['id']);
        this.VendorService.get(this.id).subscribe(
            jr => { this.vendor = jr as vendor}
        );
    }
}
