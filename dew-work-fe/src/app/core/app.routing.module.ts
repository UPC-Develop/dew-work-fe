import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from '../pages/contact/contact.component';

import { homeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { AboutusComponent } from '../pages/aboutus/aboutus.component';
import { CatalogueComponent } from '../pages/catalogue/catalogue.component';
import { OfferComponent } from '../pages/offer/offer.component';
import { ProductComponent } from '../pages/product/product.component';
import { ShoppingCartComponent } from '../pages/shopping-cart/shopping-cart.component';
import { CategoryComponent } from '../pages/category/category.component';

const routes: Routes = [
  { path: 'home', component: homeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'aboutus', component: AboutusComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'offer', component: OfferComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'category/:categoryId', component: CategoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
