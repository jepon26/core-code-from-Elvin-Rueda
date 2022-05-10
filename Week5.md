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




### 1. Given the data, define the interface "User" and use it accordingly.




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
