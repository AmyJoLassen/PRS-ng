import { Component,OnInit } from "@angular/core";
import { vendor } from "src/app/model/vendor.class";
import { VendorService } from "src/app/service/vendor.service";

@Component({
    selector: 'vendor-create',
    templateUrl: './vendor-create.component.html',
    styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
    pageTitle: string = "Vendor Create"
    vendor!: vendor;

    constructor (
      private VendorService: VendorService) {
    }

    ngOnInit() { }

    saveVendor() {
        this.VendorService.save(this.vendor).subscribe(
            jr => {
                this.vendor = jr as vendor;
            }
        );
    }

}