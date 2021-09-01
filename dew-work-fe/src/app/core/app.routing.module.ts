import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from '../contacto/contacto.component';

import { InicioComponent } from '../inicio/inicio.component';
import { LoginComponent } from '../login/login.component';
import { AboutusComponent } from '../pages/aboutus/aboutus.component';
import { CatalogoComponent } from '../pages/catalogo/catalogo.component';
import { OfertaComponent } from '../pages/oferta/oferta.component';
import { ProductComponent } from '../pages/product/product.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'aboutus', component: AboutusComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'oferta', component: OfertaComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
