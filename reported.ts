// typescript

function foo(num: number) {
  if (num > 10) {
    return 'cool';
  }
}
const result: string = foo(100);
console.log(result.toString());
console.log(foo(1).toString());

function length1(x: string) {
  let l;
  l = x.length;
  return l;
}
length1(1)

let obj1: { bar: number } = { bar: 1 };
obj1.foo = 2; // Property not found in object literal
obj

let obj2 = {};
let bar: number = obj2.foo;

type color = "red" | "green" | "blue";

function getCode(color: color) {
  switch (color) {
    case "red":
      return 0;
    case "green":
      return 1;
    case "blue":
      return 2;
  }
  color
}
