import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeListItemComponent } from './employee-list-item.component';

import { SharedModule } from '../shared/shared.module';

const homeRoutes: Routes = [
    { path: '', component: EmployeeListComponent },
    { path: ':id', component: EmployeeComponent }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(homeRoutes),
        SharedModule
    ],
    declarations: [
        EmployeeComponent,
        EmployeeListComponent,
        EmployeeListItemComponent
    ]
})
export class EmployeeModule { }
