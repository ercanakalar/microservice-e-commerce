import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent {
  @Input() inputId: string = '';
  @Input() labelName: string = '';
  @Input() placeHolder: string = '';
  @Input() type: string = 'text';
  @Input() icon: string = '';
  @Output() inputValue = new EventEmitter<{ value: string; inputId: string }>();

  onChangeInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.inputValue.emit({ value, inputId: this.inputId });
  }
}
