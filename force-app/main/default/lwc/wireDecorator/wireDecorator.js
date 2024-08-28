import {LightningElement,wire, api} from 'lwc';

import {getRecordId,getFieldValue} from 'lightning/uiRecordApi'

// import NAME_FIELD from '@salesforce/schema/Account.Name';
// import PHONE_FIELD from '@salesforce/schema/Account.Phone';


// Other Method without importing the fields we can directly pass the fields in the wire decorator


export default class wireDecorator extends LightningElement{

    @api recordId;


    // @wire (getRecordId,{recordId: '$recordId',fields:[NAME_FIELD,PHONE_FIELD]})

//-------------------------OR-----------------------------------------------------

    @wire (getRecordId,{recordId: '$recordId',fields:['Account.Name','Account.Phnoe']})
    
    
   
   
   
   
    record;// data and error


    get name(){
 
        // return this.record.data ? getFieldValue(this.record.data,NAME_FIELD):'';

//-------------------------------------OR-------------------------------------------------------------------

        return this.record.data ? getFieldValue(this.record.data,'Account.Name'):'';

    }
    get phone(){


        // return this.record.data ? getFieldValue(this.record.data,PHONE_FIELD) :'';

//------------------------------------------------------OR-------------------------------------------------------------------------------

        return this.record.data ? getFieldValue(this.record.data,'Account.Phone') :'';
    }



}