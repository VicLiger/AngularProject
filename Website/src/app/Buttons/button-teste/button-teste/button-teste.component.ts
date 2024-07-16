import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms'

@Component({
  selector: 'app-button-teste',
  standalone: true,
  imports: [],
  templateUrl: './button-teste.component.html',
  styleUrl: './button-teste.component.css'
})
export class ButtonTesteComponent {
      @Input() label:string = ''
      ButtonName: string = "Aprendendo a passar conteudo"
      ButtonNameVetor: string[] = ['Vender', 'Comprar']
      ButtonNumber: number = 8
      ButtonAlert: string = "Alerta"

      ButtonObjetc = {
        label: 'Objeto'
      }

      placePass:string = "Escrita interativa"

      getAlert(){
        alert("ola mundo")
      }
}
