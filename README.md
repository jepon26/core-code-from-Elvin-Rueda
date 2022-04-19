
# core-code-from-Elvin-Rueda



## Index

<a href="https://github.com/jepon26/core-code-from-Elvin-Rueda/blob/main/Week%201">Week 1</a>


## Tuesday 




### 1. Interpreted And Compiled Programming Languages



### Compiled languages: 

(C++, Go) are converted directly into machine native code by a compiler program.


### Interpreted Languages**: 

In interpreted languages (Python, JavaScript), there are no build steps. Instead, interpreters operate on the source code of the program while executing it.

   
### 2.- Is Java compiled or interpreted, or both? 


Java can be considered both a compiled and an interpreted language because its source code is first compiled into a binary byte-code. This byte-code runs on the Java Virtual Machine (JVM), which is usually a software-based interpreter. The use of compiled byte-code allows the interpreter (the virtual machine) to be small and efficient (and nearly as fast as the CPU running native, compiled code). 



 ### 3.- Pseudocode Currency Converter exercise (a program to determine if a number is greater than 50)
  


   1. Start
   2. A < -- 10
   3. Z < -- A > 50
   4. PRINT Z
   5. END
   


### 4. Learn about High and Low level languages
 


A high-level language (HLL) is a programming language such as C, FORTRAN, or Pascal that enables a programmer to write programs that are more or less independent of a particular type of computer. Such languages are considered high-level because they are closer to human languages and further from machine languages.
```

In contrast, assembly languages are considered low-level because they are very close to machine languages.



Examples of used high-level languages:


Python.
Java.
C++
C#
Visual Basic.
JavaScript.
```


## Wednesday
  



 ### 1. Year or Birth
  



_1983= **11110111111**	
                
                
 
 |2ˆ10 |2ˆ9 |2ˆ8 |2ˆ8 |2ˆ6 |2ˆ5 |2ˆ4 |2ˆ3 |2ˆ2 |2ˆ1 |2ˆ0|
 |-----|----|----|----|----|----|----|----|----|----|---|
 |1024 |512 |256 |128 |64  |32  |16	 |8   |4	  |2	  |1  |
 |1	   |1	  |1	  | 1  |0	  |1	  |1	  |1	  |1	  |1	  |1  |


### 2. MIPS

`Create a program to add two numbers given by the user`:

```assembly

.data
    n1: .asciiz "enter your first number: "
    n2: .asciiz "enter your second number: "
    result: .asciiz "result is "

.text
    #getting first input.
    la $a0, n1
    li $v0, 4
    syscall
    li $v0, 5
    syscall
    move $t0, $v0

    #getting second input.
    la $a0, n2
    li $v0, 4
    syscall
    li $v0, 5
    syscall
    move $t1, $v0

    #calculate and print out the result.
    la $a0, result
    li $v0, 4
    syscall
    add $t3, $t0, $t1
    move $a0, $t3
    li $v0, 1
    syscall

    #end program.
    li $v0, 10
    syscall
    
```    
## Thursday 

### 1. Print special numbers

Using **For**: 

```assembly

for (let i = 0; i < 9; i++) {
   console.log(i);
   // more statements
}

```


### 2. Bad code



```assembly

var cond = false; 
if (cond == true) 
{ console.log('The cond variable is true'); } 
else { console.log('The cond variable is false'); } 
```
The code was using an assignment instead of a comparision expression.


### 2. Bad code 2



```assembly

var n = 100;

if (n == 100) {
  console.log('This is a special number!');
} else if (n < 1000 && n % 10 == 0) {
  console.log('This number is almost special');
} else {
  console.log('Just a regular number');
}
