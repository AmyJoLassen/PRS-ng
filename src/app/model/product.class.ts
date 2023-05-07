import { vendor } from "./vendor.class";

export class Product {
    id: number = 0;
    vendorId: number = 0;
    partNbr: string = '';
    name: string = '';
    price: number = 0;
    unit: string = 'per';
    photopath: string = '';
   
    vendor!: vendor;

    constructor(id: number, partNbr: string, name: string,
        price: number, unit: string, photoPath: string,
        vendorID: number,
         vendor: vendor, ) {
            this.id = id;
            this.partNbr = partNbr;
            this.name = name;
            this.price = price;
            this.unit = unit;
            this.photopath = photoPath;
            this.vendorId = vendorID;
            this.vendor = vendor;
        }
}
