class person
{
    constructor(name,age)
    {
        this._name=name;
        this._age=age;
    }
    
    get name()
    {
        return this._name;
    }
    
    get age()
    {
        return this._age;
    }
    
    greet()
    {
console.log(`Hello, my name is ${this._name}, I am ${this._age} years old.`)
    }
}





class employee extends person
{
    constructor(name,age,jobTitle)
    {
        super(name,age);
        this._jobTitle=jobTitle;
    }

     
    jobGreet()
    {
        console.log(`Hello, my name is ${this._name}>, I am ${this._age} years old, and my job title is ${this._jobTitle}.`)
    }
}





const per=new employee('pooja',21,'SDE')
per.jobGreet();
per.greet();












































