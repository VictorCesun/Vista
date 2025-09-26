import { Component } from '@angular/core';
import { TarjetaComponent } from '../tarjeta/tarjeta.component';
import { Card } from '../../interfaces/card';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';




@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [TarjetaComponent, CommonModule, FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  pasteles:Card[]=[
    {
      imagen: 'assets/maxresdefault.jpg',
      titulo: 'PSP',
      descripcion: 'Se vende chidoS',
      ingredientes: ["Disco fisico","PSP Edicion especial","Cargador"]
    },
    {
      imagen: 'assets/ps2_game_final_fantasy_xii_1699657221_0e75f2e1_progressive.jpg',
      titulo: 'Final Fantasy',
      descripcion: 'Se vende chido',
      ingredientes: ['Disco fisico','PSP Edicion especial','Cosas extras']

    },
  ];

  formularioVisible:boolean=false;

  nombreProducto:string='';
  descripcion:string='';
  imagen:string='';

  indiceSeleccionado:number=0;   

  flipFormulario(){
    this.formularioVisible=!this.formularioVisible;
  }

  agregarProducto(){
    console.log("El nombre es: " + this.nombreProducto);
    console.log("La descripcion es: " + this.descripcion);
    console.log("La imagen es: " + this.imagen);
  }

  recibirValor(valorRecibido:number){
    this.indiceSeleccionado=valorRecibido;
    console.log("El indice seleccionado fue: " + valorRecibido);
  }


}
