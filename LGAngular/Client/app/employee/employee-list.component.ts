import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { EmployeeService } from './employee.service';

@Component({
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee.component.css'],
    providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {

    private employees: any;

    constructor(
        private employeeService: EmployeeService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {

        this.employeeService
            .getEmployees()
            .then(employees => this.employees = employees);
    }
}