class Person {

    //Properties
    static first_name='Jhon'
    static last_name='Dee'

    //method
    static getName() {
        return (`The name of the person is ${this.first_name} ${this.last_name}`)
    }

    //Array
    static city=['Dhaka', 'Chittagong', 'Rajshahi'];

}

console.log(Person.getName());
console.log(Person.city);

