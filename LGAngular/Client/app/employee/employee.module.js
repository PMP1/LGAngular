"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var employee_component_1 = require("./employee.component");
var employee_list_component_1 = require("./employee-list.component");
var employee_list_item_component_1 = require("./employee-list-item.component");
var shared_module_1 = require("../shared/shared.module");
var homeRoutes = [
    { path: '', component: employee_list_component_1.EmployeeListComponent },
    { path: ':id', component: employee_component_1.EmployeeComponent }
];
var EmployeeModule = (function () {
    function EmployeeModule() {
    }
    return EmployeeModule;
}());
EmployeeModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(homeRoutes),
            shared_module_1.SharedModule
        ],
        declarations: [
            employee_component_1.EmployeeComponent,
            employee_list_component_1.EmployeeListComponent,
            employee_list_item_component_1.EmployeeListItemComponent
        ]
    })
], EmployeeModule);
exports.EmployeeModule = EmployeeModule;
//# sourceMappingURL=employee.module.js.map