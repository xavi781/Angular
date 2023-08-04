import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService} from './../../../core/services/usuarios/usuarios.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit{

  form!: FormGroup;

  constructor(                  //inyeccion de dependencias
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(){
  
  }

  saveUsuario(event: Event ){       //metodo que recibe toda la informacion 
    event.preventDefault();         //evita elcomportamiento por defecto del event y que mejor haga elde nosotoros
    if(this.form.valid){
      const usuario = this.form.value;
      this.usuariosService.createUsuario(usuario) //insertamos el nuevo usuario 
      .subscribe((newUsuario)=>{                  //guarda elcambio mediante el suscribe 
        console.log(newUsuario);
        this.router.navigate(['./admin/usuarios'])  //redirije a la lista de usuarios
      });
    }
    
  }

  private buildForm(){           // metodo para construir un formulario, definiendo los campos del formulario y las validaciones asociadas a esos campos. 
    this.form= this.formBuilder.group({
      id: [ ,[Validators.required]],
      username:['',[Validators.required]],
      name:['',[Validators.required]],
      email:['',[Validators.required]]
    })
  }

}
