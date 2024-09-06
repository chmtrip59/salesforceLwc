import { LightningElement } from 'lwc';

export default class UsingQuerySelector extends LightningElement {

    greeting = 'Golu';

    myClick(event){
        this.greeting = this.template.querySelector("lightning-input").value;
    }
}