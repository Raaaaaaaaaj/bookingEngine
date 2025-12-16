import { Component, EventEmitter, Output} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
@Component ({
    selector: 'app-roomStepper',
    imports: [],
    template:`
    <p-stepper [(value)]="step">

      <p-step-list>
        <p-step value="1">Basic</p-step>
        <p-step value="2">Occupancy</p-step>
        <p-step value="3">Rates</p-step>
      </p-step-list>

      <p-step-panels>
        <p-step-panel value="1">
          <app-room-basic-details
            (formReady)="register('basic', $event)">
          </app-room-basic-details>
        </p-step-panel>

        <p-step-panel value="2">
          <app-sleeping-arrangements
            (formReady)="register('occupancy', $event)">
          </app-sleeping-arrangements>
        </p-step-panel>

        <p-step-panel value="3">
          <app-mealplan-inventory
            (formReady)="register('rates', $event)">
          </app-mealplan-inventory>

          <button class="btn btn-primary mt-3"
                  (click)="saveRoom()">
            Save Room
          </button>
        </p-step-panel>
      </p-step-panels>

    </p-stepper>
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