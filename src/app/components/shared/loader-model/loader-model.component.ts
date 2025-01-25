import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader-model',
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './loader-model.component.html',
  styleUrl: './loader-model.component.css'
})
export class LoaderModelComponent {
  @Input() loader?: boolean;
  @Input() changeBackgroundColor?: boolean;
}
