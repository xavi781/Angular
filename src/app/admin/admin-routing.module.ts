import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component'
import { NavComponent } from './components/nav/nav.component'
import { AdminListComponent } from './components/admin-list/admin-list.component'
import { FormProductComponent } from './components/form-product/form-product.component' 
import { ProductEditComponent } from './components/product-edit/product-edit.component' 

const routes: Routes = [
  
  {
    path: '',
    component: NavComponent,
    children :[
      {
      path: 'create',
      component: UsuarioFormComponent
    },
    
    
    {
      path: 'usuarios',
      component: AdminListComponent
    },
    {
      path:'usuarios/create',
      component: FormProductComponent
    },
    {
      path:'usuarios/edit/:id',
      component: ProductEditComponent
    }
  ]
  },
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
