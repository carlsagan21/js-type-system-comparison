// // @flow

// function foo(num: number) {
//     if (num > 10) {
//         return 'cool';
//     }
// }

// const result: string = foo(100);
// console.log(result.toString());
// console.log(foo(100).toString());

// let obj1 = { bar: 1 };
// obj1.foo = 2; // Property not found in object literal
// obj1

// let obj2 = {};
// let bar: number = obj2.foo;

// type color = "red" | "green" | "blue";

// function getCode(color: color) {
//   switch(color) {
//       case "red":
//         return 0;
//       case "green":
//         return 1;
//       // case "blue":
//       //   return 2;
//   }
// }
// function getCode2(color: color): number {
//   if (color === "red") {
//     return 0
//   } else if (color === "green") {
//     return 1;
//   } else if (color === "blue") {
//     return 2;
//   }
//   color
// }

// function f(abc: string): string {
//   if (typeof abc === "string") {
//     return 'A result';
//   } else {
//     abc.foobar() // should error! abc is UndefT!
//     return 'B result';
//   }
// }

// class A {}
// class B {}
// class C {}

// type ABC = A | B | C;

// function f(abc: ABC): string {
//     if (abc instanceof A) {
//         return 'A result';
//     } else if (abc instanceof B) {
//         return 'B result';
//     } else if (abc instanceof C) {
//         return 'C result';
//     }
// }

// function merge(a, b) {
//   return a.concat(b)
// }

// merge(["a"], ["b"])
// merge([1], [2])
