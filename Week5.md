# core-code-from-Elvin-Rueda


## Monday




### 1. Find the missing letter




Solution:
 
 
 ```Javascript
 
 
 function findMissingLetter(array){
  var string = array.join("");
  for (var i = 0; i < string.length; i++){
    if(string.charCodeAt(i + 1) - string.charCodeAt(i) != 1) {
      return String.fromCharCode(string.charCodeAt(i) + 1);
    }
  }
}

```


### 2. Reverse or rotate?




Solution:
 
 
 ```Javascript
 
 function revrot(str, sz) {
    // your code
  if(!sz||sz<0||sz>str.length)return '';
  var arr=str.match(new RegExp('\\d{'+sz+'}','g'));
  return arr.map(function(x){
  if(x.toString().split('').reduce((y,x)=>y+x*1,0)%2===0){
    return x.split('').reverse().join('');
  }
  else return x.slice(1)+x[0];
                    }).join('');
}
  
  
  
 ```
 
 
 
 
 ## Thursday




### 1. TypeScript Object Type




Solution:
 
 
 ```TypeScript
 
 export type User= {
         name : string;
         age  : number;
         occupation: string;
}

export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);

```

### 1. TypeScript Unions 




Solution:
 
 
 ```TypeScript
 
 
 interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin ;

export const persons: Person[] /* <- Person[] */ = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(user: Person) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);

```


