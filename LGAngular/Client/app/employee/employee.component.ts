import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EmployeeService } from './employee.service';


@Component({
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css'],
    providers: [EmployeeService]
})

export class EmployeeComponent implements OnInit {

    private employee:any

    constructor(
        private employeeService: EmployeeService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {

        this.route.params
            .switchMap((params: Params) => this.employeeService.getEmployee(+params['id']))
            .subscribe(employee => this.employee = employee);

      
    }
}