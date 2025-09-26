import { Card } from '../../interfaces/card';
import { Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})

export class TarjetaComponent {
  @Input() myCard!:Card;

  @Output() selectedCard = new EventEmitter<number>();

  @Input() indice:number=0;

  seleccionDeTarjeta(){
    console.log("Tarjeta seleccionada");
    this.selectedCard.emit(this.indice);
  }

}