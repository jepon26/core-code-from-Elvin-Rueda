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
 
 
 
