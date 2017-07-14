import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'textinputa',
    templateUrl: './textinput.component.html'

})
export class TextInputA {

    @Input() model: any;
    @Input() name: string;

    //Emit the event change
    @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();


    //Check for change
    changeModel(change: any) {
        this.model = change;
        this.modelChange.emit(change);
    }
}