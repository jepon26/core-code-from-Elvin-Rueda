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


