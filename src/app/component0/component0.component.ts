import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-component0',
  templateUrl: './component0.component.html',
  styleUrls: ['./component0.component.css']
})
export class Component0Component implements OnInit {

  constructor() {
   }

  DragDropped ($event: CdkDragEnd) {
    if (($event.source.getFreeDragPosition().x > 318) && 
        ($event.source.getFreeDragPosition().x < 996) &&
        ($event.source.getFreeDragPosition().y > -200) &&
        ($event.source.getFreeDragPosition().y < 228)) {
          console.log($event)
    }
    else {
      //clear
    }    
  }

  drop(event: CdkDragDrop<string[]>) {
    var component_id = null
    if ((event.dropPoint.x > 430) && (event.dropPoint.x < 1200)) {
      component_id = event.previousIndex  
    }

    switch (component_id) {
      case 0:
        let num = document.createElement('div');
        num.innerHTML = '<input type="number">';
        let numbox = document.getElementById('boundary-box')
        numbox?.appendChild(num);
        break;
      case 1:
        let row = document.createElement('div');
        row.innerHTML = `<input type="text">`;
        let box = document.getElementById('boundary-box')
        box?.appendChild(row);
        break;
      case 2:
        let button = document.createElement('button');
        button.innerHTML = 'Click Me';
        let buttonbox = document.getElementById('boundary-box')
        buttonbox?.appendChild(button);
        break;
      default:
        break;
    }
  }

  ngOnInit(): void {
  }

}