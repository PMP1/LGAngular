webpackJsonp([1],{

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(10);
var http_1 = __webpack_require__(88);
__webpack_require__(160);
var EmployeeService = (function () {
    function EmployeeService(http) {
        this.http = http;
    }
    //returns a list of employees
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get('api/employees/')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //returns a single employee
    EmployeeService.prototype.getEmployee = function (id) {
        return this.http.get('api/employees/' + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EmployeeService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmployeeService);
exports.EmployeeService = EmployeeService;


/***/ }),

/***/ 157:
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n"

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(10);
var platform_browser_1 = __webpack_require__(51);
var common_1 = __webpack_require__(31);
var router_1 = __webpack_require__(59);
var http_1 = __webpack_require__(88);
var app_component_1 = __webpack_require__(204);
var root_header_component_1 = __webpack_require__(209);
var employee_module_1 = __webpack_require__(208);
var defaultRoutes = [];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            employee_module_1.EmployeeModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(defaultRoutes)
        ],
        providers: [
            { provide: common_1.LocationStrategy, useClass: common_1.PathLocationStrategy }
        ],
        declarations: [
            app_component_1.AppComponent,
            root_header_component_1.RootHeaderComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(10);
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <div id=\"top\" class=\"wrapper\">\n        <root-header></root-header>\n        <router-outlet></router-outlet>\n    </div>\n    ",
        //styles: [require('./app.component.css')],
        host: { '[class]': 'bodyClass' }
    })
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(10);
var EmployeeListItemComponent = (function () {
    function EmployeeListItemComponent() {
    }
    return EmployeeListItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EmployeeListItemComponent.prototype, "employee", void 0);
EmployeeListItemComponent = __decorate([
    core_1.Component({
        selector: 'employee-list-item',
        template: __webpack_require__(366),
        styles: [__webpack_require__(372)]
    })
], EmployeeListItemComponent);
exports.EmployeeListItemComponent = EmployeeListItemComponent;


/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
__webpack_require__(113);
var core_1 = __webpack_require__(10);
var router_1 = __webpack_require__(59);
var employee_service_1 = __webpack_require__(126);
var EmployeeListComponent = (function () {
    function EmployeeListComponent(employeeService, route) {
        this.employeeService = employeeService;
        this.route = route;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeService
            .getEmployees()
            .then(function (employees) { return _this.employees = employees; });
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(367),
        styles: [__webpack_require__(157)],
        providers: [employee_service_1.EmployeeService]
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService,
        router_1.ActivatedRoute])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;


/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
__webpack_require__(113);
var core_1 = __webpack_require__(10);
var router_1 = __webpack_require__(59);
var employee_service_1 = __webpack_require__(126);
var EmployeeComponent = (function () {
    function EmployeeComponent(employeeService, route) {
        this.employeeService = employeeService;
        this.route = route;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.employeeService.getEmployee(+params['id']); })
            .subscribe(function (employee) { return _this.employee = employee; });
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(368),
        styles: [__webpack_require__(157)],
        providers: [employee_service_1.EmployeeService]
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService,
        router_1.ActivatedRoute])
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;


/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(10);
var router_1 = __webpack_require__(59);
var common_1 = __webpack_require__(31);
var employee_component_1 = __webpack_require__(207);
var employee_list_component_1 = __webpack_require__(206);
var employee_list_item_component_1 = __webpack_require__(205);
var shared_module_1 = __webpack_require__(212);
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


/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(10);
var RootHeaderComponent = (function () {
    function RootHeaderComponent() {
    }
    return RootHeaderComponent;
}());
RootHeaderComponent = __decorate([
    core_1.Component({
        selector: 'root-header',
        template: __webpack_require__(369),
        styles: [__webpack_require__(635)]
    })
], RootHeaderComponent);
exports.RootHeaderComponent = RootHeaderComponent;


/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(10);
var ContainerComponent = (function () {
    function ContainerComponent() {
    }
    return ContainerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ContainerComponent.prototype, "header", void 0);
ContainerComponent = __decorate([
    core_1.Component({
        selector: 'container',
        template: __webpack_require__(370),
        styles: [__webpack_require__(373)]
    })
], ContainerComponent);
exports.ContainerComponent = ContainerComponent;


/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(10);
var TextInputA = (function () {
    function TextInputA() {
        //Emit the event change
        this.modelChange = new core_1.EventEmitter();
    }
    //Check for change
    TextInputA.prototype.changeModel = function (change) {
        this.model = change;
        this.modelChange.emit(change);
    };
    return TextInputA;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TextInputA.prototype, "model", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TextInputA.prototype, "name", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TextInputA.prototype, "modelChange", void 0);
TextInputA = __decorate([
    core_1.Component({
        selector: 'textinputa',
        template: __webpack_require__(371)
    })
], TextInputA);
exports.TextInputA = TextInputA;


/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(10);
var common_1 = __webpack_require__(31);
var forms_1 = __webpack_require__(196);
var container_component_1 = __webpack_require__(210);
var textinput_component_1 = __webpack_require__(211);
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        declarations: [
            container_component_1.ContainerComponent,
            textinput_component_1.TextInputA
        ],
        exports: [
            container_component_1.ContainerComponent,
            textinput_component_1.TextInputA
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;


/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var platform_browser_dynamic_1 = __webpack_require__(89);
var app_module_1 = __webpack_require__(197);
//if (environment.production) {
//  enableProdMode();
//}
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 366:
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/', employee.EmployeeId]\">\r\n    <div class=\"wrapper\">\r\n        <div class=\"firstname\">{{employee.FirstName}}</div>\r\n        <div class=\"surname\">{{employee.LastName}}</div>\r\n        <div class=\"age\">{{employee.Age}}</div>\r\n    </div>\r\n</a>\r\n<hr/>\r\n";

/***/ }),

/***/ 367:
/***/ (function(module, exports) {

module.exports = "<h1>Employee List</h1>\r\n<container>\r\n\r\n    <div *ngFor=\"let employee of employees\">\r\n        <employee-list-item [employee]=\"employee\"></employee-list-item>\r\n    </div>\r\n\r\n</container>";

/***/ }),

/***/ 368:
/***/ (function(module, exports) {

module.exports = "\r\n<container>\r\n    <a routerLink='/'>&lt; Back</a>\r\n\r\n    <div *ngIf=\"employee\">\r\n        <h1>{{employee.FirstName | uppercase}} {{employee.LastLame | uppercase}}</h1>\r\n        <textinputa name=\"Firstname\" [model]=\"employee.FirstName\" (modelChange)=\"employee.FirstName=$event\"></textinputa>\r\n        <textinputa name=\"Lastname\" [model]=\"employee.LastLame\" (modelChange)=\"employee.LastLame=$event\"></textinputa>\r\n        <textinputa name=\"Age\" [model]=\"employee.Age\" (modelChange)=\"employee.Age=$event\"></textinputa>\r\n    </div>\r\n</container>\r\n";

/***/ }),

/***/ 369:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    Root Header Component\r\n</div>";

/***/ }),

/***/ 370:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <h2>{{header}}</h2>\r\n    <div>\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 371:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <label [for]=\"name\">{{name}}</label>\r\n    <input [name]=\"name\" type=\"text\" [ngModel]=\"model\" (ngModelChange)=\"changeModel($event)\" />\r\n</div>\r\n\r\n";

/***/ }),

/***/ 372:
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n    display: table;\r\n}\r\n\r\n.firstname {\r\n    display: table-cell;\r\n    width: 200px;\r\n}\r\n\r\n.lastname {\r\n    display: table-cell;\r\n    width: 200px;\r\n}\r\n\r\n.age {\r\n    display: table-cell;\r\n    width: 100px;\r\n}"

/***/ }),

/***/ 373:
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n    background-color: #0094ff;\r\n    padding: 20px;\r\n    margin: 20px;\r\n    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);\r\n    border-radius:3px;\r\n}\r\n"

/***/ }),

/***/ 635:
/***/ (function(module, exports) {

module.exports = "div {\r\n    background-color: #9a3535;\r\n    border-bottom: 2px solid #ffd800;\r\n}"

/***/ })

},[213]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYXBwL2VtcGxveWVlL2VtcGxveWVlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2FwcC9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2NsaWVudC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2FwcC9lbXBsb3llZS9lbXBsb3llZS1saXN0LWl0ZW0uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9hcHAvZW1wbG95ZWUvZW1wbG95ZWUtbGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2FwcC9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2FwcC9lbXBsb3llZS9lbXBsb3llZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2FwcC9yb290IGhlYWRlci9yb290LWhlYWRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2FwcC9zaGFyZWQvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2FwcC9zaGFyZWQvaW5wdXQvdGV4dGlucHV0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9tYWluLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9hcHAvZW1wbG95ZWUvZW1wbG95ZWUtbGlzdC1pdGVtLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2NsaWVudC9hcHAvZW1wbG95ZWUvZW1wbG95ZWUtbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvYXBwL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2NsaWVudC9hcHAvcm9vdCBoZWFkZXIvcm9vdC1oZWFkZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2FwcC9zaGFyZWQvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvYXBwL3NoYXJlZC9pbnB1dC90ZXh0aW5wdXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2FwcC9lbXBsb3llZS9lbXBsb3llZS1saXN0LWl0ZW0uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvYXBwL3NoYXJlZC9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2FwcC9yb290IGhlYWRlci9yb290LWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBMkM7QUFDM0MscUNBQXFDO0FBQ3JDLHlCQUFxQztBQUdyQyxJQUFhLGVBQWU7SUFFeEIseUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUksQ0FBQztJQUVuQyw2QkFBNkI7SUFDN0Isc0NBQVksR0FBWjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQzthQUNqQyxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsa0JBQVEsSUFBSSxlQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2pDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELDJCQUEyQjtJQUMzQixxQ0FBVyxHQUFYLFVBQVksRUFBVTtRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO2FBQ3RDLFNBQVMs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QVU7U0FDYjtLQUNKLENBQUM7R0FDVyxZQUFZLENBQUk7QUFBaEIsb0NBQVk7Ozs7Ozs7Ozs7QUN0QnpCLHlEQUEyRTtBQUUzRSw0Q0FBNkM7QUFHN0MsK0JBQStCO0FBQy9CLHFCQUFxQjtBQUNyQixHQUFHO0FBRUgsaURBQXNCLEVBQUU7S0FDbkIsZUFBZSxDQUFDLHNCQUFTLENBQUMsQ0FBQzs7Ozs7Ozs7QUNYaEMsdUlBQXVJLG9CQUFvQiwyQ0FBMkMsbUJBQW1CLHVDQUF1QyxjQUFjLDJDOzs7Ozs7O0FDQTlRLDhOOzs7Ozs7O0FDQUEsK0RBQStELCtEQUErRCxnQ0FBZ0MsR0FBRywrQkFBK0IsNlo7Ozs7Ozs7QUNBaE0sZ0U7Ozs7Ozs7QUNBQSx1REFBdUQsUUFBUSxpRjs7Ozs7OztBQ0EvRCx1REFBdUQsTUFBTSx1STs7Ozs7OztBQ0E3RCw0QkFBNEIsdUJBQXVCLEtBQUssb0JBQW9CLDRCQUE0QixxQkFBcUIsS0FBSyxtQkFBbUIsNEJBQTRCLHFCQUFxQixLQUFLLGNBQWMsNEJBQTRCLHFCQUFxQixLQUFLLEM7Ozs7Ozs7QUNBL1EsNEJBQTRCLGtDQUFrQyxzQkFBc0IscUJBQXFCLHFEQUFxRCwwQkFBMEIsS0FBSyxLOzs7Ozs7O0FDQTdMLHVCQUF1QixrQ0FBa0MseUNBQXlDLEtBQUssQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxuICAgIC8vcmV0dXJucyBhIGxpc3Qgb2YgZW1wbG95ZWVzXHJcbiAgICBnZXRFbXBsb3llZXMoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnYXBpL2VtcGxveWVlcy8nKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9yZXR1cm5zIGEgc2luZ2xlIGVtcGxveWVlXHJcbiAgICBnZXRFbXBsb3llZShpZDogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnYXBpL2VtcGxveWVlcy8nICsgaWQpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkJywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vc291cmNlLW1hcC1sb2FkZXIhLi9jbGllbnQvYXBwL2VtcGxveWVlL2VtcGxveWVlLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiYm9keSB7XFxyXFxufVxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jbGllbnQvYXBwL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBIYXNoTG9jYXRpb25TdHJhdGVneSwgUGF0aExvY2F0aW9uU3RyYXRlZ3ksIExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJvb3RIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3Jvb3QgaGVhZGVyL3Jvb3QtaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVtcGxveWVlTW9kdWxlIH0gZnJvbSAnLi9lbXBsb3llZS9lbXBsb3llZS5tb2R1bGUnO1xyXG5cclxuXHJcblxyXG5jb25zdCBkZWZhdWx0Um91dGVzOiBSb3V0ZXMgPSBbXTtcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICAgICAgRW1wbG95ZWVNb2R1bGUsXHJcbiAgICAgICAgSHR0cE1vZHVsZSxcclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChkZWZhdWx0Um91dGVzKVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHsgcHJvdmlkZTogTG9jYXRpb25TdHJhdGVneSwgdXNlQ2xhc3M6IFBhdGhMb2NhdGlvblN0cmF0ZWd5IH1cclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgUm9vdEhlYWRlckNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vY2xpZW50L2FwcC9hcHAubW9kdWxlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGlkPVwidG9wXCIgY2xhc3M9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgPHJvb3QtaGVhZGVyPjwvcm9vdC1oZWFkZXI+XHJcbiAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgLy9zdHlsZXM6IFtyZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuY3NzJyldLFxyXG4gICAgaG9zdDogeyAnW2NsYXNzXSc6ICdib2R5Q2xhc3MnIH1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vY2xpZW50L2FwcC9hcHAuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2VtcGxveWVlLWxpc3QtaXRlbScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9lbXBsb3llZS1saXN0LWl0ZW0uY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vZW1wbG95ZWUtbGlzdC1pdGVtLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVtcGxveWVlTGlzdEl0ZW1Db21wb25lbnQgIHtcclxuXHJcbiAgICBASW5wdXQoKSBlbXBsb3llZTogYW55O1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vY2xpZW50L2FwcC9lbXBsb3llZS9lbXBsb3llZS1saXN0LWl0ZW0uY29tcG9uZW50LnRzIiwiaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEVtcGxveWVlU2VydmljZSB9IGZyb20gJy4vZW1wbG95ZWUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2VtcGxveWVlLWxpc3QuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vZW1wbG95ZWUuY29tcG9uZW50LmNzcycpXSxcclxuICAgIHByb3ZpZGVyczogW0VtcGxveWVlU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVtcGxveWVlTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHJpdmF0ZSBlbXBsb3llZXM6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGVtcGxveWVlU2VydmljZTogRW1wbG95ZWVTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLmVtcGxveWVlU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0RW1wbG95ZWVzKClcclxuICAgICAgICAgICAgLnRoZW4oZW1wbG95ZWVzID0+IHRoaXMuZW1wbG95ZWVzID0gZW1wbG95ZWVzKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL2NsaWVudC9hcHAvZW1wbG95ZWUvZW1wbG95ZWUtbGlzdC5jb21wb25lbnQudHMiLCJpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRW1wbG95ZWVTZXJ2aWNlIH0gZnJvbSAnLi9lbXBsb3llZS5zZXJ2aWNlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2VtcGxveWVlLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2VtcGxveWVlLmNvbXBvbmVudC5jc3MnKV0sXHJcbiAgICBwcm92aWRlcnM6IFtFbXBsb3llZVNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHByaXZhdGUgZW1wbG95ZWU6YW55XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBlbXBsb3llZVNlcnZpY2U6IEVtcGxveWVlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxyXG4gICAgKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zXHJcbiAgICAgICAgICAgIC5zd2l0Y2hNYXAoKHBhcmFtczogUGFyYW1zKSA9PiB0aGlzLmVtcGxveWVlU2VydmljZS5nZXRFbXBsb3llZSgrcGFyYW1zWydpZCddKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShlbXBsb3llZSA9PiB0aGlzLmVtcGxveWVlID0gZW1wbG95ZWUpO1xyXG5cclxuICAgICAgXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vc291cmNlLW1hcC1sb2FkZXIhLi9jbGllbnQvYXBwL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRW1wbG95ZWVDb21wb25lbnQgfSBmcm9tICcuL2VtcGxveWVlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVtcGxveWVlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vZW1wbG95ZWUtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFbXBsb3llZUxpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9lbXBsb3llZS1saXN0LWl0ZW0uY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuXHJcbmNvbnN0IGhvbWVSb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogRW1wbG95ZWVMaXN0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICc6aWQnLCBjb21wb25lbnQ6IEVtcGxveWVlQ29tcG9uZW50IH1cclxuXTtcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoaG9tZVJvdXRlcyksXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgRW1wbG95ZWVDb21wb25lbnQsXHJcbiAgICAgICAgRW1wbG95ZWVMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgIEVtcGxveWVlTGlzdEl0ZW1Db21wb25lbnRcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVtcGxveWVlTW9kdWxlIHsgfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vc291cmNlLW1hcC1sb2FkZXIhLi9jbGllbnQvYXBwL2VtcGxveWVlL2VtcGxveWVlLm1vZHVsZS50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3Jvb3QtaGVhZGVyJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3Jvb3QtaGVhZGVyLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3Jvb3QtaGVhZGVyLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJvb3RIZWFkZXJDb21wb25lbnQgeyB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vY2xpZW50L2FwcC9yb290IGhlYWRlci9yb290LWhlYWRlci5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY29udGFpbmVyJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2NvbnRhaW5lci5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9jb250YWluZXIuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGFpbmVyQ29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZztcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL2NsaWVudC9hcHAvc2hhcmVkL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RleHRpbnB1dGEnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdGV4dGlucHV0LmNvbXBvbmVudC5odG1sJylcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZXh0SW5wdXRBIHtcclxuXHJcbiAgICBASW5wdXQoKSBtb2RlbDogYW55O1xyXG4gICAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIC8vRW1pdCB0aGUgZXZlbnQgY2hhbmdlXHJcbiAgICBAT3V0cHV0KCkgbW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG5cclxuICAgIC8vQ2hlY2sgZm9yIGNoYW5nZVxyXG4gICAgY2hhbmdlTW9kZWwoY2hhbmdlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLm1vZGVsID0gY2hhbmdlO1xyXG4gICAgICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdChjaGFuZ2UpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vY2xpZW50L2FwcC9zaGFyZWQvaW5wdXQvdGV4dGlucHV0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUZXh0SW5wdXRBIH0gZnJvbSAnLi9pbnB1dC90ZXh0aW5wdXQuY29tcG9uZW50JztcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBDb250YWluZXJDb21wb25lbnQsXHJcbiAgICAgICAgVGV4dElucHV0QVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBDb250YWluZXJDb21wb25lbnQsXHJcbiAgICAgICAgVGV4dElucHV0QVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHsgfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vc291cmNlLW1hcC1sb2FkZXIhLi9jbGllbnQvYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwiaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcblxyXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcclxuXHJcblxyXG4vL2lmIChlbnZpcm9ubWVudC5wcm9kdWN0aW9uKSB7XHJcbi8vICBlbmFibGVQcm9kTW9kZSgpO1xyXG4vL31cclxuXHJcbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKVxyXG4gICAgLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL2NsaWVudC9tYWluLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgZW1wbG95ZWUuRW1wbG95ZWVJZF1cXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ3cmFwcGVyXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZpcnN0bmFtZVxcXCI+e3tlbXBsb3llZS5GaXJzdE5hbWV9fTwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic3VybmFtZVxcXCI+e3tlbXBsb3llZS5MYXN0TmFtZX19PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhZ2VcXFwiPnt7ZW1wbG95ZWUuQWdlfX08L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9hPlxcclxcbjxoci8+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jbGllbnQvYXBwL2VtcGxveWVlL2VtcGxveWVlLWxpc3QtaXRlbS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDE+RW1wbG95ZWUgTGlzdDwvaDE+XFxyXFxuPGNvbnRhaW5lcj5cXHJcXG5cXHJcXG4gICAgPGRpdiAqbmdGb3I9XFxcImxldCBlbXBsb3llZSBvZiBlbXBsb3llZXNcXFwiPlxcclxcbiAgICAgICAgPGVtcGxveWVlLWxpc3QtaXRlbSBbZW1wbG95ZWVdPVxcXCJlbXBsb3llZVxcXCI+PC9lbXBsb3llZS1saXN0LWl0ZW0+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbjwvY29udGFpbmVyPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY2xpZW50L2FwcC9lbXBsb3llZS9lbXBsb3llZS1saXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcbjxjb250YWluZXI+XFxyXFxuICAgIDxhIHJvdXRlckxpbms9Jy8nPiZsdDsgQmFjazwvYT5cXHJcXG5cXHJcXG4gICAgPGRpdiAqbmdJZj1cXFwiZW1wbG95ZWVcXFwiPlxcclxcbiAgICAgICAgPGgxPnt7ZW1wbG95ZWUuRmlyc3ROYW1lIHwgdXBwZXJjYXNlfX0ge3tlbXBsb3llZS5MYXN0TGFtZSB8IHVwcGVyY2FzZX19PC9oMT5cXHJcXG4gICAgICAgIDx0ZXh0aW5wdXRhIG5hbWU9XFxcIkZpcnN0bmFtZVxcXCIgW21vZGVsXT1cXFwiZW1wbG95ZWUuRmlyc3ROYW1lXFxcIiAobW9kZWxDaGFuZ2UpPVxcXCJlbXBsb3llZS5GaXJzdE5hbWU9JGV2ZW50XFxcIj48L3RleHRpbnB1dGE+XFxyXFxuICAgICAgICA8dGV4dGlucHV0YSBuYW1lPVxcXCJMYXN0bmFtZVxcXCIgW21vZGVsXT1cXFwiZW1wbG95ZWUuTGFzdExhbWVcXFwiIChtb2RlbENoYW5nZSk9XFxcImVtcGxveWVlLkxhc3RMYW1lPSRldmVudFxcXCI+PC90ZXh0aW5wdXRhPlxcclxcbiAgICAgICAgPHRleHRpbnB1dGEgbmFtZT1cXFwiQWdlXFxcIiBbbW9kZWxdPVxcXCJlbXBsb3llZS5BZ2VcXFwiIChtb2RlbENoYW5nZSk9XFxcImVtcGxveWVlLkFnZT0kZXZlbnRcXFwiPjwvdGV4dGlucHV0YT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9jb250YWluZXI+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jbGllbnQvYXBwL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxyXFxuICAgIFJvb3QgSGVhZGVyIENvbXBvbmVudFxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY2xpZW50L2FwcC9yb290IGhlYWRlci9yb290LWhlYWRlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ3cmFwcGVyXFxcIj5cXHJcXG4gICAgPGgyPnt7aGVhZGVyfX08L2gyPlxcclxcbiAgICA8ZGl2PlxcclxcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NsaWVudC9hcHAvc2hhcmVkL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXHJcXG4gICAgPGxhYmVsIFtmb3JdPVxcXCJuYW1lXFxcIj57e25hbWV9fTwvbGFiZWw+XFxyXFxuICAgIDxpbnB1dCBbbmFtZV09XFxcIm5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIFtuZ01vZGVsXT1cXFwibW9kZWxcXFwiIChuZ01vZGVsQ2hhbmdlKT1cXFwiY2hhbmdlTW9kZWwoJGV2ZW50KVxcXCIgLz5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NsaWVudC9hcHAvc2hhcmVkL2lucHV0L3RleHRpbnB1dC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gXCIud3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlyc3RuYW1lIHtcXHJcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGFzdG5hbWUge1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5hZ2Uge1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jbGllbnQvYXBwL2VtcGxveWVlL2VtcGxveWVlLWxpc3QtaXRlbS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBcIi53cmFwcGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTRmZjtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgbWFyZ2luOiAyMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czozcHg7XFxyXFxufVxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jbGllbnQvYXBwL3NoYXJlZC9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGl2IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlhMzUzNTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmQ4MDA7XFxyXFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jbGllbnQvYXBwL3Jvb3QgaGVhZGVyL3Jvb3QtaGVhZGVyLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDYzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9