import { Component } from '@angular/core';
import { CdkDrag, CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
interface Field {
  type: string;
  label: string;
}
@Component({
  selector: 'app-builder',
  standalone: true,
  imports: [ DragDropModule],
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.scss'
})
export class BuilderComponent {
  public availableItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
 public  droppedItems = [];
constructor(){
  
}
  public drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
