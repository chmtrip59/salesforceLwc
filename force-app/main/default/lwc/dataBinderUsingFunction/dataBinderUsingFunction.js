import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

import getContacts from '@salesforce/apex/ContactController.getContact';

export default class DataBinderUsingFunction extends LightningElement {
    @api recordId;
    myFunctionContact; // for the wired call
    error; // for the wired call

    @wire(getRecord, { recordId: '$recordId', fields: 'Account.Name' })
    records;


    get name1(){
        return this.myFunctionContact.data.fields.Name.value;
    }


    @wire(getContacts, { recordId: '$recordId' })
    wiredRecords({ data, error }) {
        if (data) {
            this.myFunctionContact = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.myFunctionContact = undefined;
        }
    }


}
