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
  
  
  ### 2. Playing With Digits




Solution:
 
 
 ```Typescript
 
 
 export class G964 {

    public static digPow = (n: number, p: number) => {
        // your code
     var y = String(n).split("").map(a=>parseInt(a)).reduce((s, d, i) => s + Math.pow(d, p + i), 0)
  return y % n ? -1 : y / n
}
  }
  
  
  ```
 
 
 ### 3. Valid Braces




Solution:
 
 
 ```Typescript
 
 
 export const validBraces = (braces: string): boolean => {
  const x = braces.replace(/\(\)|\[\]|\{\}/g, '');
  if (x.length === 0) return true;
  else if (x === braces) return false;
  else return validBraces(x);
}

```
 
 ### 4. Tic-Tac-Toe




Solution:
 
 
 ```Typescript
 
 
 function solveTTT(board) {
  const win = xs => xs.map(x=>board[x]).join('') === 'XX'
  for (const xs of [[0, 1, 2],
                   [3, 4, 5],
                   [6, 7, 8],
                   [0, 3, 6],
                   [1, 4, 7],
                   [2, 5, 8],
                   [0, 4, 8],
                   [2, 4, 6]]) if(win(xs)) return xs.find(x=>!board[x])
return board.findIndex(x=>!x);
  }
  
  ```
  
  
  ### 5. Tic-Tac-Toe-like table Generator




Solution:
 
 
 ```Typescript
  
 function displayBoard(board, width){
  //your code here
  const display = []
  let row = []
  for (let i = 0; i < board.length; i++) {
    row.push(` ${board[i]} `)
    if (row.length === width) {
      display.push(row.join('|'))
      row = []
    }
  }
  return display.join(`\n${'-'.repeat(display[0].length)}\n`)
} 


 ```
 
 
 
 
 
 ## Wednesday




### 1. Duplicate Encoder




Solution:
 
 
 ```Typescript
 
 export function duplicateEncode(word: string){
    // ...
   return word
        .toLowerCase()
        .split('')
        .map( function (x, y, z) {
            return z.indexOf(x) == z.lastIndexOf(x) ? '(' : ')'
        })
        .join('');
}
 
 
 
 ```
 
 
 
 
 ### 2. Find the odd int




Solution:
 
 
 ```Typescript
 
export const findOdd = (xs: number[]): number => {
  // happy coding!
  const sorted = xs.sort();

  let key = sorted[0];
  let count = 1;
  sorted.shift();

  for (let value of sorted) {
    if (key !== value) {
      if (count % 2 !== 0) return key;
      count = 0;
      key = value;
    }
    count++;
  }

  if (count % 2 !== 0) return key;
  return 0;
};

```
