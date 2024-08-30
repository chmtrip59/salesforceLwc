public with sharing class MyContact {
    @AuraEnabled(Cacheable =true)
    public static List<Contact> myContactRecord(String myRecord){
        try {
            
            return [
                SELECT AccountId,Id,FirstName,LastName,Email 
                FROM Contact 
                WHERE AccountId =: myRecord
                WITH SECURITY_ENFORCED
            ];


        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}