//Object Literal
let person = {

    //Properties/key :  //value
    first_name: 'Jhon',
    last_name: 'Dee',
    age: 50,

    //method
    getName:()=> {
        return (`The name of the person is ${person.first_name} ${person.last_name}`)
    },
    //Array
    city:['Dhaka', 'Chittagong', 'Rajshahi']

}

console.log(person.getName());

