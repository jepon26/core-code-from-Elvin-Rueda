# core-code-from-Elvin-Rueda


## Monday




### 1. Who likes it?






Solution:
 
 
 ```Javascript
 
 if (names.length == 0) {
    return "no one likes this";
  } else if (names.length == 1) {
    return names[0] + " likes this";  
  } else if (names.length == 2) {
    return names[0] + " and " + names[1] + " like this";
  } else if (names.length == 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  } else {
    return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
  }
}

```



### 2. Bit Counting






Solution:


```Javascript

var countBits = function(n) {
  // Program Me

  return n.toString(2).split('0').join('').length;
};
```


### 3. Your order, please






Solution:


```Javascript

function order(words){
  // ...
   return words.split(' ').sort(function(a,b){
    return a.match(/\d/) - b.match(/\d/);
  }).join(' ');
}
```



## Thuesday




### 1. Simple Pig Latin






Solution:
 
 
 ```Javascript
 
 
 function pigIt(str){
  //Code here
const arr = str.split(' ')
  return arr
    .map((word) => {
      return word.match(/[A-z]/i)
        ? `${word.substr(1)}${word.substr(0, 1)}ay`
        : word
    })
    .join(' ')
}

```
 
 ### 1. Counting Duplicates






Solution:
 
 
 ```Javascript
 
 
 
