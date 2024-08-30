import { LightningElement,api,wire } from 'lwc';
import {getRecord,getFieldValue} from 'lightning/uiRecordApi'

// const myField = ['Account.Name','Account.Phone']
export default class MyWire extends LightningElement {

@api recordId;


@wire (getRecord,{recordId:'$recordId',fields:['Account.Name','Account.Phone']})

record;

get name(){

    return this.record.data ? getFieldValue(this.record.data,'Account.Name'):'';
}


get phone(){

    return this.record.data ? getFieldValue(this.record.data,'Account.Phone'):'';
}

}