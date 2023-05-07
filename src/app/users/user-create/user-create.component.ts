import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/service/user.service";
import { User } from "src/app/model/user.class";
import { Location } from "@angular/common";
import { Router } from "@angular/router";

@Component({ 
    selector: 'user-create',
    templateUrl: './user-create.component.html',
    styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
    pageTitle: string = "User Create"
    user: User = new User();

    constructor (
        private userService: UserService,
        private location: Location,
        private router: Router     ) {}

    ngOnInit() {}

    saveUser() {
        this.userService.save(this.user).subscribe(
            jr => {
                this.user = jr as User;
                this.location.back;     
                this.router.navigateByUrl("user/list")
            });
    }
}
