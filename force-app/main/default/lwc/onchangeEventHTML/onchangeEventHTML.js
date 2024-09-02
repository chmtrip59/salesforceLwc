import { LightningElement } from 'lwc';

export default class OnchangeEventHTML extends LightningElement {

greeting ="Golu";
handleChange(event){
        this.greeting = event.target.value;
}
}