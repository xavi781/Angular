import { Component,Input, Output, EventEmitter,OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy} from '@angular/core';
import {Usuario} from'../usuario.model'
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements  OnInit, DoCheck, OnDestroy{
    @Input()
    usuario!: Usuario;
    @Output()
  usuarioClicked: EventEmitter<any> = new EventEmitter();

  constructor(){
    console.log('1. constructor');
  }

  //ngOnChanges(changes: SimpleChanges){
   // console.log('2. ngOnChanges');
   // console.log(changes);
 // }

  ngOnInit(){
    console.log('3. ngOnInit')
  }

  ngDoCheck(){
    console.log('4. ngDoCheck')
  }

  ngOnDestroy(){
    console.log('5. ngOnDestroy')
  }

    addCart(){
      console.log('añadir');
      this.usuarioClicked.emit(this.usuario.id);
    }

    
}
export{ Usuario};

