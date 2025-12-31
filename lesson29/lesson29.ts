const sum5 = (x: number, y: number, z?: number) => {
    if (z) return x + y + z;
    return x + y;
}

console.log(">>> check sum 5 = ", sum5(2, 5));
console.log(">>> check sum 5 = ", sum5(2, 5, 10));