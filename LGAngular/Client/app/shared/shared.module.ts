import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { TextInputA } from './input/textinput.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ContainerComponent,
        TextInputA
    ],
    exports: [
        ContainerComponent,
        TextInputA
    ]
})
export class SharedModule { }
