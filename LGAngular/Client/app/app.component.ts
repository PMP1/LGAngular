import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div id="top" class="wrapper">
        <root-header></root-header>
        <router-outlet></router-outlet>
    </div>
    `,
    //styleUrls: ['./app.component.css'],
    host: { '[class]': 'bodyClass' }

})
export class AppComponent { }