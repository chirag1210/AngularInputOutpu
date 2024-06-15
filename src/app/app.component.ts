import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddserverComponent } from './addserver/addserver.component';
import { DisplayserverComponent } from './displayserver/displayserver.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [FormsModule, NgFor, AddserverComponent, DisplayserverComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverElements: any = [];


  valueEmittedFromChildComponent(data: any) {
    this.serverElements.push(data);
    console.log(this.serverElements);
  }
}
