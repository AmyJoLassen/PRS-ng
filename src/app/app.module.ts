import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/products-list/products-list.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestReviewComponent } from './request/request-review/request-review.component';
import { ReviewDetailComponent } from './request/review-detail/review-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { LineItemListComponent } from './line-item/line-item-list/line-item-list.component';
import { LineItemCreateComponent } from './line-item/line-item-create/line-item-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    UserCreateComponent,
    UserListComponent,
    UserDetailComponent,
    UserEditComponent,
    UserLoginComponent,
    VendorCreateComponent,
    VendorListComponent,
    VendorEditComponent,
    VendorDetailComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDetailComponent,
    RequestCreateComponent,
    RequestListComponent,
    RequestEditComponent,
    RequestReviewComponent,
    RequestDetailComponent,
    ReviewDetailComponent,
    LineItemListComponent,
    LineItemCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
