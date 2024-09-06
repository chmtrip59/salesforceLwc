import { LightningElement } from 'lwc';

export default class UsingQuerySelectorAll extends LightningElement {
    firstName = '';
    lastName ='';


    myClick(){
        let input = this.template.querySelectorAll("lightning-input");

        input.forEach(function(element){
            if(element.name == 'fName'){
                this.firstName = element.value;
            }else if(element.name == 'lName'){
                this.lastName = element.value;
            }
        },this);
    }
}