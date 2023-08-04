import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService} from './../../../core/services/usuarios/usuarios.service'
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit{
  form!: FormGroup;
  id!: number;

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(){                                               //inicializa el formulario y carga los datos del usuario correspondiente a un id
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.usuariosService.getUsuario(this.id)
      .subscribe(usurio => {
        this.form.patchValue(usurio)
      })
    });
  }

  saveUsuario(event: Event ){                         //se encarga de guardar los datos del formulario actualizado
    event.preventDefault();
    if(this.form.valid){
      const usuario = this.form.value;
      this.usuariosService.updateUsuario(this.id, usuario)
      .subscribe((newUsuario)=>{
        console.log(newUsuario);
        this.router.navigate(['./admin/usuarios'])
      });
    }
    
  }

  private buildForm(){                                    //private construye el formulario y aplica las validaciones necesarias a sus campos.
    this.form= this.formBuilder.group({
      username:['',[Validators.required]],
      name:['',[Validators.required]],
      email:['',[Validators.required]]
    })
  }
}
