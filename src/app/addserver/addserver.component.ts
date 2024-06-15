import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addserver',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addserver.component.html',
  styleUrl: './addserver.component.css'
})
export class AddserverComponent {

  @Output() dataEvent = new EventEmitter<any>();

  serverElements: any = [];
  newServerName = '';
  newServerContent = '';

  @ViewChild("serverContentInput", { static: true })
  serverContentInput!: ElementRef;


  onAddServer(serverNameInputElement: HTMLInputElement) {

    this.dataEvent.emit({
      type: 'server',
      name: serverNameInputElement.value,
      content: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInputElement: HTMLInputElement) {

    this.dataEvent.emit({
      type: 'blueprint',
      name: serverNameInputElement.value,
      content: this.serverContentInput.nativeElement.value
    });
  }
}
