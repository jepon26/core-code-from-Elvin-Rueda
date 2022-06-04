# core-code-from-Elvin-Rueda


## Monday




### 1. Input/Output

>### Input `Example` ❓
<img src="./assets/input.png" alt="Input" width="500">


 
 ### 2. Readme - OOP




Solution:
 
 
 ```Typescript
 
 
 ```
 
 
## Tuesday




### 1. Menu




Solution:
 
 
 ```Typescript
 
 
 ```
 
 
 
 ### 2. Movies




Solution:
 
 
 ```Typescript
 
 
 ```
 
 
 
 ## Wednesday




### 2. Build Tower Exercise




Solution:
 
 
 ```Typescript
 
 export const towerBuilder = (nFloors: number): string[] => {
  let array = [];
  for (let i = nFloors; i >= 1; i--) {
    let space = (nFloors - i);
    let stars = i * 2 - 1;
    array.push(" ".repeat(space) + "*".repeat(stars) + " ".repeat(space));
  }
  return array.reverse();
}
 
 
 ```
 
 ### 3. Meeting Exercise




Solution:
 
 
 ```Typescript
 
 export function meeting(s: string): string {
   return s
    .split(';')
    .map((el) => '(' + el.split(':').reverse().join(', ').toUpperCase() + ')')
    .sort()
    .join('');
}
 
 
 ```
 
