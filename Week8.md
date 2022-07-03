# core-code-from-Elvin-Rueda


## Monday




### 1. Get Started With TypeScript 




Solution:
 
 
 ```Typescript


function addNumbers(x:number, y:number) {
    return x + y;
  }
  console.log(addNumbers(3, 6));
  
  
  ```



### 2. Declare Variable Types In TypeScript 




Exercise 1:
 
 
 ```Typescript
 
 let firstName: string;
let lastName: string;
let fullName: string;
let age: number;
let ukCitizen: boolean;

firstName = 'Rebecca';
lastName = 'Smith';
age = 42;
ukCitizen = false;
fullName = firstName + " " + lastName;

if (ukCitizen) {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
} else {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
}
 
 
 ```
 
 
 Exercise 2:
 
 
 ```Typescript
 
 let x: number;
let y: number;
let a: number;

x = 5;
y = 7;
a = x + y;

console.log(a);
 

 ```
 
 
Exercise 3:
 
 
 ```Typescript
 
 
 enum Season {
    Winter,
    Spring,
    Summer,
    Fall
};

function whichMonths(season: Season) {
    let monthsInSeason: string;
    switch (season) {
        case Season.Fall:
            monthsInSeason = "September to November";
            break;
        case Season.Winter:
            monthsInSeason = "December to February";
            break;
        case Season.Spring:
            monthsInSeason = "March to May";
            break;
        case Season.Summer:
            monthsInSeason = "June to August";
    }
    return monthsInSeason;
}

console.log(whichMonths(Season.Spring));


```

Exercise 4:
 
 
 ```Typescript
 
 
 let randomNumbers: number[] = [];
let nextNumber: number;

for (let i = 0; i < 10; i++) {
    nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    randomNumbers.push(nextNumber);
}

console.log(randomNumbers);


```


## Tuesday




### 1. Develop typed functions by using TypeScript


```Typescript



//Declare a generic interface


Exercise 1:

interface Identity<T, U> {
    value: T;
    message: U;
}


Exercise 2:

let returnNumber: Identity<number, string> = {
    value: 25,
    message: 'Hello!'
}
let returnString: Identity<string, number> = {
    value: 'Hello!',
    message: 25
}





//Declare a generic interface as a function type


Exercise 1 : 


interface ProcessIdentity<T, U> {
    (value: T, message: U): T;
}

Exercise 2 : 



function processIdentity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}



Exercise 3 : 



let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber1 = processor(100, 'Hello!');   // OK
let returnString1 = processor('Hello!', 100);   // Type check error




// Declare a generic interface as a class type



Exercise 1 : 

interface ProcessIdentity<T, U> {
    value: T;
    message: U;
    process(): T;
}


Exercise 2 : 


class processIdentity<X, Y> implements ProcessIdentity<X, Y> {
    value: X;
    message: Y;
    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }
    process() : X {
        console.log(this.message);
        return this.value
    }
}


Exercise 3 : 

let processor = new processIdentity<number, string>(100, 'Hello');
processor.process();           // Displays 'Hello'
processor.value = '100';       // Type check error



// Define a generic class


Exercise 1 :

class processIdentity<T, U> {
    private _value: T;
    private _message: U;
    constructor(value: T, message: U) {
        this._value = value;
        this._message = message;
    }
    getIdentity() : T {
        console.log(this._message);
        return this._value
    }
}
let processor = new processIdentity<number, string>(100, 'Hello');
processor.getIdentity();      // Displays 'Hello'


```
