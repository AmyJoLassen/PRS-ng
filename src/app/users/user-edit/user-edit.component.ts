import { Component, OnInit } from "@angular/core";
import { User } from "src/app/model/user.class";
import { UserService } from "src/app/service/user.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {
    pageTitle: string = "User Edit";
    // user: User = new User();
    user! : User;
    id: number = 0;

    constructor(
       private userService: UserService,
       private route: ActivatedRoute 
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe(p => this.id = p['id']);
        this.userService.get(this.id).subscribe(j => this.user = j as User);
    }
}
