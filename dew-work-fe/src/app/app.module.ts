import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AppRoutingModule } from './core/app.routing.module';
import { homeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { OfferComponent } from './pages/offer/offer.component';
import { ProductComponent } from './pages/product/product.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { CategoryComponent } from './pages/category/category.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr"
import { BuyProductComponent } from './pages/buy-product/buy-product.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    CatalogueComponent,
    OfferComponent,
    ProductComponent,
    homeComponent,
    ContactComponent,
    LoginComponent,
    ShoppingCartComponent,
    CategoryComponent,
    BuyProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
