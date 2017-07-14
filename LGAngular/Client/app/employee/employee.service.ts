import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeService {

    constructor(private http: Http) { }

    //returns a list of employees
    getEmployees(): Promise<any> {
        return this.http.get('api/employees/')
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    //returns a single employee
    getEmployee(id: number): Promise<any> {
        return this.http.get('api/employees/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
