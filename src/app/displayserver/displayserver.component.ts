import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-displayserver',
  standalone: true,
  imports: [],
  templateUrl: './displayserver.component.html',
  styleUrl: './displayserver.component.css'
})
export class DisplayserverComponent {
  @Input() dataFromParent: any;
}
