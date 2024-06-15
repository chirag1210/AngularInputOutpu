import { Component, EventEmitter, Output } from '@angular/core';
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

  onAddServer() {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.dataEvent.emit({
         type: 'server',
         name: this.newServerName,
         content: this.newServerContent
       }); 
  }

  onAddBlueprint() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.dataEvent.emit({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    }); 
  }
}
