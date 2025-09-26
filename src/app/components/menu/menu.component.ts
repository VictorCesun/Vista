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
  formProducto: any;
  productos: any;

  flipFormulario(){

    this.formularioVisible=!this.formularioVisible;
    this.guardarProducto();
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

  guardarProducto() {
    if (!this.nombreProducto || !this.descripcion || !this.imagen) {
      console.log('Todos los campos son obligatorios');
      return;
    }

    const nuevoPastel: Card = {
      imagen: `assets/${this.imagen}`,
      titulo: this.nombreProducto,
      descripcion: this.descripcion,
      ingredientes: []
    };

    this.pasteles.push(nuevoPastel);
    console.log('Nuevo producto agregado: ', nuevoPastel);

    this.nombreProducto = '';
    this.descripcion = '';
    this.imagen = '';
  }
}
