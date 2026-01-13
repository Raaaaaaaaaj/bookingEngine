import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { RoomBasicDetailsComponent } from "./room-steps/roomBasicDetails.component";
import { SleepingarrangementsComponent } from "./room-steps/sleepingarrangements.component";
import { MealplanandinventoryComponent } from "./room-steps/mealplanandinventory.component";
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
@Component({
    selector: 'app-rooms',
    imports: [
        RoomBasicDetailsComponent,
        SleepingarrangementsComponent,
        MealplanandinventoryComponent,
        StepperModule,
        ButtonModule
    ],
    template: `
    <div class="row d-flex align-items-center flex-column justify-content-center">
      <div class="stepHeader text-center text-decoration-underline">
        <h4>Create Room</h4>
      </div>
      <div class="col-12">
        <p-stepper [value]="currentStep">
    <p-step-item [value]="1">
        <p-step>Header I</p-step>
        <p-step-panel>
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        <app-roomBasicDetails></app-roomBasicDetails>
                    </div>
                </div>
                <div class="py-6">
                    <p-button label="Next" (onClick)="activateCallback(2)" />
                </div>
            </ng-template>
        </p-step-panel>
    </p-step-item>

    <p-step-item [value]="2">
        <p-step>Header II</p-step>
        <p-step-panel>
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        <app-sleepingarrangements></app-sleepingarrangements>
                    </div>
                </div>
                <div class="flex py-6 gap-2">
                    <p-button label="Back" severity="secondary" (onClick)="activateCallback(1)" />
                    <p-button label="Next" (onClick)="activateCallback(3)" />
                </div>
            </ng-template>
        </p-step-panel>
    </p-step-item>

    <p-step-item [value]="3">
        <p-step>Header III</p-step>
        <p-step-panel>
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        <app-mealplanandinventory></app-mealplanandinventory>
                    </div>
                </div>
                <div class="py-6">
                    <p-button label="Back" severity="secondary" (onClick)="activateCallback(2)" />
                </div>
            </ng-template>
        </p-step-panel>
    </p-step-item>
</p-stepper>
      </div>
    </div>
    `,
    styles: ``
})

export class RoomsComponent implements OnInit {
    @Input() parentForm!: FormGroup;

    roomForm!: FormGroup;
    currentStep = 1;

    constructor(private fb: FormBuilder) { }
    ngOnInit(): void {
        this.roomForm = this.fb.group({
            roomBasicDetails: this.fb.group({}),
            sleepingArrangement: this.fb.group({}),
            mealPlansAndInventory: this.fb.group({})
        })

    }

    nextStep() {
        if (this.currentStep < 3) {
            this.currentStep++;
        }
    }
    previousStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
        }
    }
}
