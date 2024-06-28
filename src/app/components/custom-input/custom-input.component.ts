import { Component, Input, OnInit } from '@angular/core';
import { FormioComponent } from '@formio/angular';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss'
})
export class CustomInputComponent extends FormioComponent implements OnInit {
  @Input() placeholder!: string;

  override ngOnInit(): void {
    super.ngOnInit();
  }
}