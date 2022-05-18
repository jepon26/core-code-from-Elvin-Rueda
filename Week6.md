# core-code-from-Elvin-Rueda


## Monday




### 1. Square(n) Sum




Solution:
 
 
 ```Typescript

export function squareSum(numbers: number[]): number {
    let sum = 0;
    for(const num of numbers) {
      sum += num * num
    }
    return sum;
}

```

### 2. Growth of a Population




Solution:
 
 
 ```Typescript
 
 export class G964 {

    public static nbYear = (p0, percent, aug, p) => {
        // your code
  let years = 0;
      for(years; p0 < p; years++){
        p0 += p0 *(percent / 100) + aug;
      }
      return years;
}
}

```

### 3. Mumbling




Solution:
 
 
 ```Typescript
 
 
 export function accum(s: string): string {
  return s.split('').map((ja, i) => ja.toUpperCase() + (ja.toLowerCase()).repeat(i)).join ('-')
}

```
 
 
 ### 4. A wolf in sheep's clothing




Solution:
 
 
 ```Typescript
 
 
 export function warnTheSheep(queue: string[]): string {
  const position = queue.reverse().indexOf('wolf');
  return position ? `Oi! Sheep number ${position}! You are about to be eaten by a wolf!` : 
  'Pls go away and stop eating my sheep';
}


```



## Thursday




### 1. A Rule of Divisibility by 13




Solution:
 
 
 ```Typescript
 
 export function thirt(n: number): number {
  // your code
  const x = n.toString();
  const pattern = [1, 10, 9, 12, 3, 4];
  let index = 0;
  let sum = 0;

  for (let i = x.length - 1; i >= 0; i--) {
    sum += +x[i] * pattern[index];
    index = index >= 5 ? 0 : ++index;
  }

  if (sum === n) return sum;
  return thirt(sum);

}


  ```
 
