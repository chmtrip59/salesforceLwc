import { LightningElement } from 'lwc';

export default class UsingGetter extends LightningElement {
    firstName="";
    lastName="";

    handleChange(event){
        const field = event.target.name;
        if(field === 'fName'){
            this.firstName =event.target.value;
        }else if (field === 'lName'){
            this.lastName =event.target.value;
        }
        
       
    }
    get FullName(){
        return `${this.firstName} ${this.lastName}`.toUpperCase();
    }
}