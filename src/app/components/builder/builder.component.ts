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
  imports: [CommonModule, DragDropModule],
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.scss'
})
export class BuilderComponent {
  availableFields: Field[] = [
    { type: 'input', label: 'Text Input' },
    { type: 'textarea', label: 'Text Area' },
    // Add more field types as needed...
  ];

  formFields: Field[] = [];

  drop(event: CdkDragDrop<Field[]>) {
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

  generateSchema() {
    const schema = this.formFields.map((field: any) => {
      return { type: field.type, label: field.label };
    });
    console.log(JSON.stringify(schema));
  }
}
