import { LightningElement,api } from 'lwc';

export default class PublicPrivate extends LightningElement {
    //Without @api decorator
    // message='Private Property'
    // recordId;//without using @api it will not show the record id but when we call the api and add it with annotation then we can see the record Id 
    //with @api decorator

    @api message = 'Public Property using @api decorator'
    @api recordId;
}