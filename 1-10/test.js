function UserDefinedFunction()
{ 

} 

/* creating the above function automatically does the following as mentioned earlier

UserDefinedFunction.prototype={constructor:UserDefinedFunction}

*/


var newObj_1=new UserDefinedFunction()

alert(Object.getPrototypeOf(newObj_1)===UserDefinedFunction.prototype)  //Displays true

alert(newObj_1.constructor) //Displays function UserDefinedFunction

//Create a new property in UserDefinedFunction.prototype object

UserDefinedFunction.prototype.TestProperty="test"

alert(newObj_1.TestProperty) //Displays "test"

alert(Object.getPrototypeOf(newObj_1).TestProperty)// Displays "test"

//Create a new Object

var objA = {
        property1 : "Property1",
        constructor:Array

}


//assign a new object to UserDefinedFunction.prototype
UserDefinedFunction.prototype=objA

alert(Object.getPrototypeOf(newObj_1)===UserDefinedFunction.prototype)  //Displays false. The object referenced by UserDefinedFunction.prototype has changed

//The internal reference does not change
alert(newObj_1.constructor) // This shall still Display function UserDefinedFunction

alert(newObj_1.TestProperty) //This shall still Display "test" 

alert(Object.getPrototypeOf(newObj_1).TestProperty) //This shall still Display "test"


//Create another object of type UserDefinedFunction
var newObj_2= new UserDefinedFunction();

alert(Object.getPrototypeOf(newObj_2)===objA) //Displays true.

alert(newObj_2.constructor) //Displays function Array()

alert(newObj_2.property1) //Displays "Property1"

alert(Object.getPrototypeOf(newObj_2).property1) //Displays "Property1"

//Create a new property in objA
objA.property2="property2"

alert(objA.property2) //Displays "Property2"

alert(UserDefinedFunction.prototype.property2) //Displays "Property2"

alert(newObj_2.property2) // Displays Property2

alert(Object.getPrototypeOf(newObj_2).property2) //Displays  "Property2"