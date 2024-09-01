import { LightningElement,api, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContact'//for 2nd wire decorator
import { getRecord } from 'lightning/uiRecordApi';// for 1st wire decorator 


export default class DataBinder extends LightningElement {

    @api recordId;


    @wire(getRecord,{recordId:'$recordId',fields:'Account.Name'})//uiRecordApi
    records;//Data and Error

    @ wire(getContacts,{accId:'$recordId'})//Apex
    contacts;//Data and Error

    get name(){

        return this.records.data.fields.Name.value;//1st

    }
}