function foo(a, b) {
  // Use nullish coalescing to provide default values for a and b
  a ??= 0; // If a is null or undefined, set it to 0
  b ??= 0; // If b is null or undefined, set it to 0
  return a + b; 
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 2
console.log(foo(1, null)); // 1
console.log(foo(null, null)); // 0
console.log(foo(undefined, 2)); //2
console.log(foo(1, undefined));//1
console.log(foo(undefined, undefined));//0