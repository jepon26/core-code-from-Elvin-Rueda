# core-code-from-Elvin-Rueda


## Tuesday 




### 1. Multiply






Solution:


```javascript

   function multiply(a, b){
 return a * b
}

```


### 2. ASCII Total






Solution:



```javascript

 function uniTotal (x) {
// total up dem unicodes!
  var sum=0;
  for (var i=0; i<x.length; ++i)
    sum+=x[i].charCodeAt();
  return sum;
}
```

    
### 3. Char From ASCII Value 





Solution:



```javascript

function getChar(DEL){
  // ... 
   let str = DEL
    return String.fromCharCode(str)
}
```



### 4. addBinary



Solution:


```javascript

function addBinary(x,y) {
  return (x+y).toString(2)
}
```

### 5. Student's Final Grade



Solution:



```javascript

function finalGrade (exam, projects) {
  if(exam > 90 || projects > 10) return 100
  if(exam > 75 && projects > 4) return 90
  if(exam > 50 && projects > 1) return 75
  return 0;
}
```

## Wednesday 






### 1. Holiday VIII - Duty Free


Solution:


```javascript

function dutyFree(normPrice, discount, hol){
 var disc = discount * 0.01
  var cost = normPrice * disc
  var costHol = hol / cost
 
return Math.floor(costHol)
}
```


### 2. Twice as old


Solution:


```javascript

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  
  var dad = dadYearsOld
  var son = 2*(sonYearsOld)
  
  return Math.abs(dad-son);
}
```




### 3. Valid Spacing




Solution:




```javascript

function validSpacing(x) {
  // write your code here
  if (x === "") return true
  return !x.split(" ").includes("")
}
```
