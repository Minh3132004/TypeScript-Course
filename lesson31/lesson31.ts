const multipleArray = (a: number, ...b: number[]): number[] => {
    return b.map((item) => item * a);
}

console.log(multipleArray(2, 1, 2, 3, 4, 5)); // [2,4,6,8,10]

function sum(...numbers: number[]): number {
    let total : number = 0;
    numbers.forEach((num) => {
        total += num;
    }   
);
    return total;
}

console.log(sum()); // 0
console.log(sum(1, 2, 3, 4, 5)); // 15


function Greet(greeting: string, ...names: string[]) {
    console.log(names)
    return greeting + " " + names + "!";
}

console.log(Greet("Hello")); // "Hello !"
console.log(Greet("Hello", "Alice" , "Bob")); // "Hello Alice,Bob!"
// console.log(Greet("Hello", "Alice" , 6)); // Error


