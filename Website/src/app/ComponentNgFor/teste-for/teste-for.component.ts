import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teste-for',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './teste-for.component.html',
  styleUrl: './teste-for.component.css'
})
export class TesteForComponent implements OnInit{
  
  produtos : string[] = []
  menuType : string = "superUser"

  constructor() {
    this.produtos = [
      "Carro",
      "Computador",
      "Moto",
      "Mouse"
    ]
  }


  ngOnInit(): void {
    
  }

  Adicionar() : void{
    this.produtos.push("ERICK É VIADO")
  }

  Remover(index : number) {
    this.produtos.splice(index, 1)
    }
}
''