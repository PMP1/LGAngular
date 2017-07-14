import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { HashLocationStrategy, PathLocationStrategy, LocationStrategy } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RootHeaderComponent } from './root header/root-header.component';
import { EmployeeModule } from './employee/employee.module';



const defaultRoutes: Routes = [];


@NgModule({
    imports: [
        BrowserModule,
        EmployeeModule,
        HttpModule,
        RouterModule.forRoot(defaultRoutes)
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy }
    ],
    declarations: [
        AppComponent,
        RootHeaderComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
