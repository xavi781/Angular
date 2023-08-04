import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { UsuarioComponent } from './usuario/usuario.component';
import { ContactComponent } from './contact/contact.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule}from './shared/shared.module';
import { CoreModule}from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ContactComponent,
    ListaUsuariosComponent,
    PageNotFoundComponent,
    UsuarioDetailComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
