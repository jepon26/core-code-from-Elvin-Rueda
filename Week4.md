# core-code-from-Elvin-Rueda


## Wednesday




### 1. Simple validation of a username with regex




Solution:
 
 
 ```Javascript
 
 
 function validateUsr(username) {
 return /^[a-z0-9_]{4,16}$/g.test(username); //regex here/.test(username) 
  }
  
  ````



### 2. Get number from string




Solution:
 
 
 ```Javascript


function getNumberFromString(s) {
  let regex = /\D/g;
  let newString = s.replace(regex, "");
  return Number(newString);
}


```
