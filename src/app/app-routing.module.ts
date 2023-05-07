import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { ProductListComponent } from './products/products-list/products-list.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { RequestReviewComponent } from './request/request-review/request-review.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { ReviewDetailComponent } from './request/review-detail/review-detail.component';

const routes: Routes = [
  {path: "login", component: UserLoginComponent},
  {path: '', component: UserLoginComponent},
  {path: '', redirectTo: "/home", pathMatch: "full"},
   
  {path: "user/list", component:UserListComponent},
  {path: "user/create", component: UserCreateComponent},
  {path: "user/detail/:id", component: UserDetailComponent}, 
  {path: "user/edit/:id", component: UserEditComponent},
  {path: "user/login", component: UserLoginComponent},

  {path: "vendor/list", component:VendorListComponent},
  {path: "vendor/create", component: VendorCreateComponent},
  {path: "vendor/detail/:id", component: VendorDetailComponent}, 
  {path: "vendor/edit/:id", component: VendorEditComponent},

  {path: "product/list", component:ProductListComponent},
  {path: "product/create", component: ProductCreateComponent},
  {path: "product/detail/:id", component: ProductDetailComponent}, 
  {path: "product/edit/:id", component: ProductEditComponent},

  {path: "request/list", component:RequestListComponent},
  {path: "request/detail/:id", component:RequestDetailComponent},
  {path: "request/edit/:id", component: RequestEditComponent},
  {path: "request/review", component: RequestReviewComponent},
  {path: "request/create", component: RequestCreateComponent},
  {path: "review/detail", component: ReviewDetailComponent},

  {path: "home", component: HomeComponent},
  {path: '**', component: UserLoginComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
