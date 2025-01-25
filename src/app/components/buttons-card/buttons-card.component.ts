import { Component, EventEmitter, Input, Output } from '@angular/core';

// Importamos el tipo LoaderKeys
type LoaderKeys = `loader_${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
  11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 |
  21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
  31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 |
  41 | 42 | 43 | 44 | 45 | 46 | 47}`;

@Component({
  selector: 'app-buttons-card',
  templateUrl: './buttons-card.component.html',
  styleUrls: ['./buttons-card.component.css']
})
export class ButtonsCardComponent {
  // Entrada: nombre del loader
  @Input() loader_name?: LoaderKeys;

  // Salida: evento que emite el nombre del loader
  @Output() showLoader = new EventEmitter<LoaderKeys>();

  // Método para emitir el evento del loader
  showLoaderEvent(): void {
    if (this.loader_name) {
      this.showLoader.emit(this.loader_name);
    }
  }

  // Método para obtener la ruta de la imagen
  getSRC(): string {
    return this.loader_name ? `loaders/${this.loader_name}.png` : '';
  }

  // Método para obtener el nombre del loader en mayúsculas
  getName(): string {
    return this.loader_name ? this.loader_name.toUpperCase() : '';
  }
}
