import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-lifecicle',
  standalone: true,
  imports: [],
  templateUrl: './lifecicle.component.html',
  styleUrl: './lifecicle.component.css'
})
export default class LifecicleComponent implements OnInit, OnChanges {


  @Input() nome:string = ''

  constructor() {
    console.log(`Constructor ${this.nome}`)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`OnChanges ${this.nome}`)
  }

  ngOnInit(): void {
    console.log(`OnInit ${this.nome}`)
  }

}
