import { LightningElement,api } from 'lwc';

export default class Child extends LightningElement {

    upperCase = "Default Value" ;

    @api
    get itemName(){
        return this.upperCase;
    }

    set itemName(value){
        this.upperCase = value.toUpperCase();

}
}