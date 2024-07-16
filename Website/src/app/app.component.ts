import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonTesteComponent } from "./Buttons/button-teste/button-teste/button-teste.component";
import LifecicleComponent from "./Buttons/button-teste/life-cicle/lifecicle/lifecicle.component";
import { TesteForComponent } from "./ComponentNgFor/teste-for/teste-for.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonTesteComponent, LifecicleComponent, TesteForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Website';
  PassarVarivel:string = 'Não sei o que to fazezndo'
}
