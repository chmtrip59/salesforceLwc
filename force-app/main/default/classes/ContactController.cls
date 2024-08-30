public with sharing class ContactController {
    @AuraEnabled (cacheable=true)
    public static List<Contact> getContact(String accId){
        try {

     return [
                SELECT AccountId,Id,FirstName FROM Contact 
                WHERE AccountID =: accId 
                WITH SECURITY_ENFORCED
            ];
            
                } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
}