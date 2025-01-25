import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader-1',
  imports: [],
  templateUrl: './loader-1.component.html',
  styleUrl: './loader-1.component.css'
})
export class Loader1Component {
  @Input() loader?: boolean;
}
