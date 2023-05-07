import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ActivationEnd } from "@angular/router";
import { UserService } from "src/app/service/user.service";
import { User } from "src/app/model/user.class";

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent implements OnInit {
    pageTitle: string = "User Detail";
    user!: User
    id: number = 0;

    constructor(
        private userService: UserService,
        private router: Router,
        private route: ActivatedRoute ) {}

    ngOnInit(): void {
        this.route.params.subscribe(p => this.id = p['id']);
        this.userService.get(this.id).subscribe(jr => this.user = jr as User);
    }

    delete() {
        this.userService.delete(this.id).subscribe(jr => this.router.navigateByUrl("user/list"));
    }
}
