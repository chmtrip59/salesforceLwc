import { LightningElement,api,wire } from 'lwc';
import myContactRecord from '@salesforce/apex/MyContact.myContactRecord'
export default class MyWireApex extends LightningElement {

@ api recordId;


@wire(myContactRecord,{myRecord:'$recordId'})
myData;

}