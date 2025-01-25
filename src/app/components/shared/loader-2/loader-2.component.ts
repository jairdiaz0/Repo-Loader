import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader-2',
  imports: [],
  templateUrl: './loader-2.component.html',
  styleUrl: './loader-2.component.css'
})
export class Loader2Component {
  @Input() loader?: boolean;
}
