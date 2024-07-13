import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonTesteComponent } from "./Buttons/button-teste/button-teste/button-teste.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonTesteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Website';
  PassarVarivel:string = 'Não sei o que to fazezndo'
}
