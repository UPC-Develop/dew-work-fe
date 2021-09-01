import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AppRoutingModule } from './core/app.routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { OfertaComponent } from './pages/oferta/oferta.component';
import { ProductComponent } from './pages/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    CatalogoComponent,
    OfertaComponent,
    ProductComponent,
    InicioComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
