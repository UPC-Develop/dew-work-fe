import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AboutusComponent } from '../pages/aboutus/aboutus.component';
import { CatalogoComponent } from '../pages/catalogo/catalogo.component';
import { OfertaComponent } from '../pages/oferta/oferta.component';
import { ProductComponent } from '../pages/product/product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'oferta', component: OfertaComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
