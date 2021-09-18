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
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
