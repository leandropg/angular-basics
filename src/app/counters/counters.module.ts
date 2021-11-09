import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CounterComponent } from './add-counter/add-counter.component';

@NgModule({
    declarations: [

        CounterComponent
    ],
    exports: [

        CounterComponent
    ],
    imports: [

        CommonModule
    ]
})
export class CountersModule {

}