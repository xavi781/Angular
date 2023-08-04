import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './../../../core/services/usuarios/usuarios.service';
import { Usuario} from'./../../../usuario/usuario.component'

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {

  usuarios: Usuario[] = [];
  displayedColumns: string[] = ['id', 'name','username', 'email', 'actions'];

  constructor(
    private usuariosService: UsuariosService
  ){}

  ngOnInit(){
    this.fetchUsuarios();
  }

  fetchUsuarios(){
    this.usuariosService.getAllUsusarios()
    .subscribe( usuarios =>{
      this.usuarios = usuarios;
    });
  }
  deleteUsuario(id:number){
    this.usuariosService.deleteUsuario(id)
    .subscribe(rta => {
      this.fetchUsuarios();
    })
  }
}
