import { Component, Input } from '@angular/core';

@Component({
    selector: 'employee-list-item',
    templateUrl: './employee-list-item.component.html',
    styleUrls: ['./employee-list-item.component.css']
})
export class EmployeeListItemComponent  {

    @Input() employee: any;
}