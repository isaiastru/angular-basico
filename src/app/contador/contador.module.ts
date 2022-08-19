import { NgModule } from "@angular/core";
import { ContadorcomponentComponent } from './contadorcomponent/contadorcomponent.component';


@NgModule ({
    declarations: [
        ContadorcomponentComponent
    ],

    exports: [
        ContadorcomponentComponent
    ]
})

export class ContadorModule {}