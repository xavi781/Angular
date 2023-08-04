import {  NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules} from '@angular/router';

import { ContactComponent}from './contact/contact.component'
import {ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { UsuarioDetailComponent} from './usuario-detail/usuario-detail.component';


import { LayoutComponent} from './layout/layout.component'
import { adminGuard } from './admin.guard'
//enlazamos las rutas
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren:() => import ('./home/home.module').then(m=> m.HomeModule)   //cargamos el modulo con loadChildren 
      }, 
      {
        path: 'contact',
        canActivate : [adminGuard],
        component: ContactComponent
      },
      {
        path: 'users',
          component: ListaUsuariosComponent
        },
        {
          path: 'users/:id',
            component: UsuarioDetailComponent
          },

          {
            path:'admin',
            
            loadChildren:() => import ('./admin/admin.module').then(m=> m.AdminModule) 
          },
    ]

  },

    {
      path:'**',
      component: PageNotFoundComponent

    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
