import { Component, EventEmitter, Output} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
@Component ({
    selector: 'app-roomStepper',
    imports: [],
    template:`
    `,
    styles: ``
})

export class RoomsStepperComponent{
    step = 1;
    roomForm: FormGroup;

  @Output() roomCompleted = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder) {
    this.roomForm = this.fb.group({});
  }


  register(key: string, form: FormGroup) {  
    this.roomForm.setControl(key, form);
  }

  saveRoom() {
    this.roomCompleted.emit(this.roomForm);
    this.roomForm = this.fb.group({});
    this.step = 1;
  }
}