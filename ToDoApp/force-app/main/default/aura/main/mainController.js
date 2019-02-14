({
    doInit: function(component, event, helper){
        helper.loadTodo(component);
    
    }, handleClick : function(component, event, helper) {
        var activityName = component.get("v.activityName");
        var activityDeadline = component.get("v.activityDeadline");
        var myArray = component.get("v.container");
        
        var Object = {
            activity: activityName,
            deadline: activityDeadline
        }

        myArray.push(Object);

        component.set("v.container", myArray);

        console.log("It's done");
    },
})