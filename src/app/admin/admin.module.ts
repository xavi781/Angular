import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { NavComponent } from './components/nav/nav.component';
import{ MaterialModule } from './../material/material.module';
import {AdminListComponent} from './components/admin-list/admin-list.component'
import { FormProductComponent } from './components/form-product/form-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductEditComponent} from './components/product-edit/product-edit.component' 


@NgModule({
  declarations: [
    UsuarioFormComponent,
    NavComponent,
    AdminListComponent,
    FormProductComponent,
    ProductEditComponent    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule
    
    
  ]
})
export class AdminModule { }
