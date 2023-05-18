
 //Arithmetic operators + - / * % ++ --
let num = 100;
console.log(num + 5);
console.log(num - 5);
console.log(num * 5);
console.log(num / 5);
console.log(num % 5);

   console.log("==============");
 //Assingnments  Operators 
    // = += -= *= /= %=
console.log(num +=100 ); 
console.log(num -=50 ); 
console.log(num *=2 ); 
console.log(num /=2 ); 

   console.log("==============");

//Relational or comparison operator     
    // == ===  != !== >  >= < <= 
    let price    = 99;
    let strPrice = "99";

console.log(price == strPrice);//true: just check for content equality
console.log(price === strPrice); //false: check for content equality and data type 
console.log(price!=99);
    console.log("==============");

//Logical Operator  && || & , |
console.log(price<100 && price>50);
//check the price is less than 10 or greater than 100
console.log(price<10 || price>100);

//Array : 

let scores = [99,67,59,77,100];
console.log(scores);
//get the first item in array 
console.log(scores[0]);

//count how many elements in array
console.log('Item count: ' + scores.length );

console.log('============');

//Javascript object
let person1 = {
    firstName : 'Elnara',
    lastName  : 'H',
    age       : 18,
    company: {
        CompanyName : 'Apple',
        location : 'California',
    }
};
console.log(person1);
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.company.CompanyName);





