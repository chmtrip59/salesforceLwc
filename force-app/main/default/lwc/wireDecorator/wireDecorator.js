import {LightningElement,wire, api} from 'lwc';

import {getRecord,getFieldValue} from 'lightning/uiRecordApi'

// import NAME_FIELD from '@salesforce/schema/Account.Name';
// import PHONE_FIELD from '@salesforce/schema/Account.Phone';


// Other Method without importing the fields we can directly pass the fields in the wire decorator

const FIELDS =['Account.Name',
    'Account.Phone'] // To use collection directly in @wire fields:FIELDS to avoid using Account.Name or Account.Phone


export default class wireDecorator extends LightningElement{

    @api recordId;


    // @wire (getRecordId,{recordId: '$recordId',fields:[NAME_FIELD,PHONE_FIELD]})

//-------------------------OR-----------------------------------------------------

    // @wire (getRecord,{recordId: '$recordId',fields:['Account.Name','Account.Phone']})
    
//--------------------OR-----------------------------
// OR USING FIELDS COLLECTION

    @wire(getRecord,{recordId: '$recordId',fields:FIELDS})

 
    
   
   
   
   
    record;// data and error


    get name(){
 
        // return this.record.data ? getFieldValue(this.record.data,NAME_FIELD):'';

//-------------------------------------OR-------------------------------------------------------------------

        // return this.record.data ? getFieldValue(this.record.data,'Account.Name'):'';

        //OR
        //without using getFieldValue method 

        return this.record.data.fields.Name.value;

    }
    get phone(){


        // return this.record.data ? getFieldValue(this.record.data,PHONE_FIELD) :'';

//------------------------------------------------------OR-------------------------------------------------------------------------------

        // return this.record.data ? getFieldValue(this.record.data,'Account.Phone') :'';
           
        //OR

        return this.record.data.fields.Phone.value;// to use this we have to find whether our data is present in the record.data or not , for this we have make certain change in the template of the html file to use conditional statement IF 
        // like <template if:true = {record.data}></template>

        // to check the data is present or not we have to use record.data.fields.fieldName.value
    }



}