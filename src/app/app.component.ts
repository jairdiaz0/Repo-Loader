import { Component } from '@angular/core';
import { ButtonsComponent } from "./components/buttons/buttons.component";

@Component({
  selector: 'app-root',
  imports: [ButtonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tools-loaders';
}
