import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormioModule, FormioComponent, Formio } from '@formio/angular';
import bootstrap4 from '@formio/bootstrap/bootstrap4';
import { CustomInputComponent } from '../custom-input/custom-input.component';
(Formio as any).use(bootstrap4);
// Register the custom component with Formio
// FormioComponent.register('custom', CustomInputComponent);

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormioModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @ViewChild('json') jsonElement?: ElementRef;
  public form: Object = {components: []};
  onChange(event:any) {
    console.log(event.form);
  }
}
