import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params}from '@angular/router';
import { UsuariosService } from './../core/services/usuarios/usuarios.service';
import { Usuario } from './../usuario.model';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.scss']
})
export class UsuarioDetailComponent implements OnInit {
  usuario!: Usuario;  // Declaración de la propiedad 'usuario'

  constructor(           //inicializa el componente
    private route: ActivatedRoute,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.fetchUsuario(id);
      
    });
  }

  fetchUsuario(id: number ){                    //llama al metodo get            
    this.usuariosService.getUsuario(id)
    .subscribe(usuario=> {
      this.usuario= usuario;
    });
  }

  createUsuario(){                               //crea un objeto de usuario con información específica 
    const newUsuario: Usuario = {               
      id: 11,
      name: "Xacier Cruz",
      username: "xavi781",
      email: "xavier.cruzl@ug.edu.ec",
      address: {
        street: "Martha de Roldos",
        suite: "Apt. 556",
        city: "Guayaquil",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Sudamericana de software",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    };
    this.usuariosService.createUsuario(newUsuario)   //recibe la informacion del nuevo usuario y se la manda al servicio "usuariosService" .
    .subscribe(usuario=> {
      console.log(usuario);
    });
  }

  updateUsuario(){
    const updateUsuario: Partial< Usuario >={
      name: "edicion desde angular",
      username: "Bret"
    };
    this.usuariosService.updateUsuario(1 , updateUsuario)   //recibe la informacion del nuevo usuario y se la manda al servicio "usuariosService" .
    .subscribe(usuario=> {
      console.log(usuario);
    });
  }

  deleteUsuario(){
    this.usuariosService.deleteUsuario(1)   //recibe la informacion del nuevo usuario y se la manda al servicio "usuariosService" .
    .subscribe(rta=> {
      console.log(rta);
    });
  }

}
