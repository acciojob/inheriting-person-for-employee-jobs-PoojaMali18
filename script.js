// complete this js code
function Person(name, age) {
	this.name=name;
	this.age=age;
}
Person.prototype.greet()= function()
	{
		console.log(`Hello, my name is ${name}`);
		console.log(`I am ${age} years old`);
	}
function Employee(name, age, jobTitle) 
{
   Person.call(this,name,age);
	this.jobTitle=jobTitle;
}

Employee.prototype=Person.prototype;
Employee.prototype.jobGreet() = function()
	{
		greet().call(this);
		console.log(`my job title is ${jobTitle}`)
	}
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
