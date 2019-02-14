public with sharing class ToDoController {
    public ToDoController() {

    }
    @AuraEnabled
    public static List<Todo__c> getTodo(){
		List<Todo__c> Todos = [SELECT Id, Name FROM Todo__c];
        return Todos;
    }
}
