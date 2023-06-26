class Person {

    //Properties/key :  //value
    first_name= 'Jhon';
    last_name= 'Dee';
    age= 50;

    //method
    getName=()=> {
        return (`The name of the person is ${this.first_name} ${this.last_name}`);
    }

    //Array
    city=['Dhaka', 'Chittagong', 'Rajshahi'];
}

const person1 = new Person();
console.log(person1.getName());




 
   



